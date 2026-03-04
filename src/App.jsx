// src/App.jsx
import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import Coordinators from "./components/Coordinators";
import Footer from "./components/Footer";
import IntroVideo from "./components/IntroVideo";

import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <IntroVideo onVideoEnd={() => setShowIntro(false)} />
      ) : (
        <div className="app">
          <Header />
          <HeroSection />
          <Events />
          <Coordinators />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
