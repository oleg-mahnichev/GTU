// src/styles/GlobalStyles.js

import { createGlobalStyle } from "styled-components";

// Пример CSS Reset + базовые стили
const GlobalStyles = createGlobalStyle`
  /* --- CSS Reset --- */
  /* Убираем margin/padding и ставим box-sizing для всех элементов */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Убираем стандартные стили для списков */
  ul, ol {
    list-style: none;
  }

  /* Очищаем стили для ссылок по умолчанию */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* --- Базовые стили --- */
  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    /* Базовый шрифт, можно подключить через @import или линк в index.html */
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    background-color: #ffffff; /* светлая тема по умолчанию */
    color: #213547;            /* основной цвет текста */
    /* Если нужно поддерживать темную тему, можно расширить логику ниже */
  }

  /* Стилизация ссылок */
  a {
    font-weight: 500;
    color: #646cff;
    transition: color 0.25s ease;
  }
  a:hover {
    color:rgb(247, 240, 91);
  }

  /* Общие стили для кнопок */
  button {
    border: none;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }
  button:hover {
    /* Пример ховера: меняем фон или бордер */
    border: 1px solid #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  /* --- Глобальный контейнер --- */
  /* Если у вас в index.html есть #root, его можно стилизовать здесь */
  #root {
    max-width: 1440px;
    margin: 0 auto;
    /* padding: 2rem; */
    /* Если нужно, чтобы основной контент был по центру, но Header и Footer не ограничивались, Header/Footer можно вынести или применять full-bleed стили */
  }

  /* Пример медиа-запросов для адаптивности */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
    #root {
      max-width: 100%;
      /* padding: 1rem; */
    }
  }
`;

export default GlobalStyles;
