// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Kontakt from "./pages/Kontakt";
import { AppContainer, Main } from "./AppStyles";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    // Дополнительная логика при необходимости
  };

  return (
    <Router basename="/GTU">
      <AppContainer>
        <Header currentLang={language} onLangChange={handleLanguageChange} />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </Main>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
