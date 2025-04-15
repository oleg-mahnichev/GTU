// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Импортируем переводы для английского (аналогично для других языков можно делать импорты)
import headerEn from "../src/locales/en/header.json";
import footerEn from "../src/locales/en/footer.json";
import homeEn from "../src/locales/en/home.json";
import aboutEn from "../src/locales/en/about.json";


import headerDe from "../src/locales/de/header.json";
import footerDe from "../src/locales/de/footer.json";
import homeDe from "../src/locales/de/home.json";
import aboutDe from "../src/locales/de/about.json";

import headerUa from "../src/locales/ua/header.json";
import footerUa from "../src/locales/ua/footer.json";
import homeUa from "../src/locales/ua/home.json";
import aboutUa from "../src/locales/ua/about.json";

// Структура ресурсов
const resources = {
    en: {
        header: headerEn,
        footer: footerEn,
        home: homeEn,
        about: aboutEn
    },
    de: {
        header: headerDe,
        footer: footerDe,
        home: homeDe,
        about: aboutDe
    },
    ua: {
        header: headerUa,
        footer: footerUa,
        home: homeUa,
        about: aboutUa
    }
};

i18n.use(initReactI18next).init({
    resources,
    // Перечисляем namespace, соответствующие каждому разделу
    ns: ["header", "footer", "home", "about"],
    defaultNS: "header", // можно задать дефолтный namespace для тех случаев, когда namespace не указан явно
    lng: "en",           // базовый язык – английский
    fallbackLng: "en",   // язык по умолчанию, если перевод отсутствует
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
