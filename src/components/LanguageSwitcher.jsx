// src/components/LanguageSwitcher.jsx
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import i18n from "../i18n"; // Подключаем настройки i18next
import {
  DropdownWrapper,
  LangButton,
  DropdownMenu,
  DropdownItem,
  FlagWrapper,
  StyledFlagIcon,
} from "./LanguageSwitcherStyles";

// Обновлённый список языков: для украинского используется код "uk" (а не "ua")
// чтобы соответствовать ключу перевода в i18n.js
const languages = [
  { code: "de", label: "DE", countryCode: "DE" },
  { code: "ua", label: "UA", countryCode: "UA" },
  { code: "fr", label: "FR", countryCode: "FR" },
  { code: "en", label: "EN", countryCode: "GB" },
  { code: "pl", label: "PL", countryCode: "PL" },
  { code: "es", label: "ES", countryCode: "ES" },
  { code: "it", label: "IT", countryCode: "IT" },
  { code: "ru", label: "RU", countryCode: "RU" },
];

const LanguageSwitcher = ({ currentLang, onLangChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (langCode) => {
    // Переключаем язык через i18next
    i18n.changeLanguage(langCode);
    // Обновляем состояние в родительском компоненте
    onLangChange(langCode);
    setOpen(false);
  };

  // Находим объект текущего языка для отображения флага
  const currentLanguage = languages.find((l) => l.code === currentLang);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <LangButton onClick={toggleOpen}>
        <span>{currentLang.toUpperCase()}</span>
        {currentLanguage && (
          <FlagWrapper>
            <StyledFlagIcon countryCode={currentLanguage.countryCode} svg />
          </FlagWrapper>
        )}
      </LangButton>
      {open && (
        <DropdownMenu>
          {languages.map((lang) => (
            <DropdownItem
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
            >
              {lang.label}
              <FlagWrapper>
                <StyledFlagIcon countryCode={lang.countryCode} svg />
              </FlagWrapper>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

LanguageSwitcher.propTypes = {
  currentLang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
