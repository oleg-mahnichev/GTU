# 🌍 Global Trade Ukraine — Consulting & Logistics

Цей проєкт — візитка консалтингового сервісу для роботи з постачальниками з України та Східної Європи. Побудований на **React + Vite** з використанням **react-router-dom** і **Tailwind CSS**.

---

## 🚀 Запуск локально

1. Клонуй репозиторій:

```bash
git clone https://github.com/твій-акаунт/global-trade-ukraine.git
cd global-trade-ukraine
```

2. Встанови залежності:

```bash
npm install
```

3. Запусти проєкт:

```bash
npm run dev
```

4. Відкрий в браузері:

```
http://localhost:5173
```

---

## 🧩 Основні сторінки

- `/` — Home (Презентація + Аккордеон з послугами)
- `/pricing` — Тарифи
- `/about` — Інформація про нас

---

## 🌐 Технології

- React 18+
- Vite
- Tailwind CSS (можна замінити на Styled Components)
- React Router DOM

---

## 📦 Деплой на GitHub Pages (через gh-pages)

1. Встановити плагін:

```bash
npm install --save-dev gh-pages
```

2. Додати в `package.json`:

```json
"homepage": "https://твій-акаунт.github.io/global-trade-ukraine",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Збілдити і задеплоїти:

```bash
npm run deploy
```

---

## 📄 Ліцензія

MIT License — вільне використання з посиланням на автора.
