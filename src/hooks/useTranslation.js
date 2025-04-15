import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations.json";

export const useTranslation = () => {
    const { language } = useLanguage();

    // Функция для получения перевода по ключу
    const t = (key) => {
        return translations[key] ? translations[key][language] || key : key;
    };

    return { t };
};
