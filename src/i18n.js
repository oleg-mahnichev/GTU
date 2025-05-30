// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Импортируем переводы для английского (аналогично для других языков можно делать импорты)
import headerEn from "../src/locales/en/header.json";
import homeEn from "../src/locales/en/home.json";
import aboutEn from "../src/locales/en/about.json";
import pricingEn from "../src/locales/en/pricing.json";
import contactEn from "../src/locales/en/contact.json";
import footerEn from "../src/locales/en/footer.json";

import headerDe from "../src/locales/de/header.json";
import footerDe from "../src/locales/de/footer.json";
import homeDe from "../src/locales/de/home.json";
import aboutDe from "../src/locales/de/about.json";
import pricingDe from "../src/locales/de/pricing.json";
import contactDe from "../src/locales/de/contact.json";

import headerUa from "../src/locales/ua/header.json";
import footerUa from "../src/locales/ua/footer.json";
import homeUa from "../src/locales/ua/home.json";
import aboutUa from "../src/locales/ua/about.json";
import pricingUa from "../src/locales/ua/pricing.json";
import contactUa from "../src/locales/ua/contact.json";

import headerEs from "../src/locales/es/header.json";
import footerEs from "../src/locales/es/footer.json";
import homeEs from "../src/locales/es/home.json";
import aboutEs from "../src/locales/es/about.json";
import pricingEs from "../src/locales/es/pricing.json";
import contactEs from "../src/locales/es/contact.json";


import headerIt from "../src/locales/it/header.json";
import footerIt from "../src/locales/it/footer.json";
import homeIt from "../src/locales/it/home.json";
import aboutIt from "../src/locales/it/about.json";
import pricingIt from "../src/locales/it/pricing.json";
import contactIt from "../src/locales/it/contact.json";

import headerPl from "../src/locales/pl/header.json";
import footerPl from "../src/locales/pl/footer.json";
import homePl from "../src/locales/pl/home.json";
import aboutPl from "../src/locales/pl/about.json";
import pricingPl from "../src/locales/pl/pricing.json";
import contactPl from "../src/locales/pl/contact.json";

import headerFr from "../src/locales/fr/header.json";
import footerFr from "../src/locales/fr/footer.json";
import homeFr from "../src/locales/fr/home.json";
import aboutFr from "../src/locales/fr/about.json";
import pricingFr from "../src/locales/fr/pricing.json";
import contactFr from "../src/locales/fr/contact.json";

import headerRu from "../src/locales/ru/header.json";
import footerRu from "../src/locales/ru/footer.json";
import homeRu from "../src/locales/ru/home.json";
import aboutRu from "../src/locales/ru/about.json";
import pricingRu from "../src/locales/ru/pricing.json";
import contactRu from "../src/locales/ru/contact.json";

// Структура ресурсов
const resources = {
    en: {
        header: headerEn,
        home: homeEn,
        about: aboutEn,
        pricing: pricingEn,
        contact: contactEn,
        footer: footerEn,
    },
    de: {
        header: headerDe,
        footer: footerDe,
        home: homeDe,
        about: aboutDe,
        pricing: pricingDe,
        contact: contactDe
    },
    ua: {
        header: headerUa,
        footer: footerUa,
        home: homeUa,
        about: aboutUa,
        pricing: pricingUa,
        contact: contactUa,
    },
    es: {
        header: headerEs,
        footer: footerEs,
        home: homeEs,
        about: aboutEs,
        pricing: pricingEs,
        contact: contactEs,
    },
    it: {
        header: headerIt,
        footer: footerIt,
        home: homeIt,
        about: aboutIt,
        pricing: pricingIt,
        contact: contactIt,
    },
    pl: {
        header: headerPl,
        footer: footerPl,
        home: homePl,
        about: aboutPl,
        pricing: pricingPl,
        contact: contactPl,
    },
    fr: {
        header: headerFr,
        footer: footerFr,
        home: homeFr,
        about: aboutFr,
        pricing: pricingFr,
        contact: contactFr,
    },
    ru: {
        header: headerRu,
        footer: footerRu,
        home: homeRu,
        about: aboutRu,
        pricing: pricingRu,
        contact: contactRu
    },
};

i18n.use(initReactI18next).init({
    resources,
    // Перечисляем namespace, соответствующие каждому разделу
    ns: ["header", "footer", "home", "about", "pricing", "contact"],
    defaultNS: "header", // можно задать дефолтный namespace для тех случаев, когда namespace не указан явно
    lng: "en",           // базовый язык – английский
    fallbackLng: "en",   // язык по умолчанию, если перевод отсутствует
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
