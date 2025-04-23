// src/App.jsx
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Kontakt from "./pages/Contact";
import { AppContainer, Main, AnimatedPageWrapper } from "./AppStyles";
import { AnimatePresence } from "framer-motion";

console.log("App.jsx запускается!");

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <AnimatedPageWrapper
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </AnimatedPageWrapper>
    </AnimatePresence>
  );
}

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
  };

  return (
    <Router basename="/GTU">
      <AppContainer>
        <Header currentLang={language} onLangChange={handleLanguageChange} />
        <Main>
          <AnimatedRoutes />
        </Main>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
