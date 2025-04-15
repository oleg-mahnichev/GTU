// src/components/Header.jsx
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import logoImage from "../assets/logo.jpg";
import {
  HeaderContainer,
  LogoLink,
  LogoImage,
  StyledNavLink,
  NavLinks,
} from "./HeaderStyles";

const Header = ({ currentLang, onLangChange }) => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoImage src={logoImage} alt="Global Trade Ukraine" />
        Global Trade Ukraine
      </LogoLink>

      <NavLinks>
        <StyledNavLink to="/" end>
          {t("home")}
        </StyledNavLink>
        <StyledNavLink to="/pricing">{t("pricing")}</StyledNavLink>
        <StyledNavLink to="/about">{t("about")}</StyledNavLink>
        <StyledNavLink to="/kontakt">{t("kontakt")}</StyledNavLink>
        <LanguageSwitcher
          currentLang={currentLang}
          onLangChange={onLangChange}
        />
      </NavLinks>
    </HeaderContainer>
  );
};

Header.propTypes = {
  currentLang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired,
};

export default Header;
