// src/App.jsx
import React, { useState, useEffect } from "react";
import BeginVideo from "./assets/BeginVideo.mp4";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Events from "./components/Events";
import Coordinators from "./components/Coordinators";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleVideoEnd = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "auto";
  }, [showIntro]);

  return (
    <>
      {showIntro && (
        <div className="video-overlay">
          <video
            src={BeginVideo}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="intro-video"
          />
        </div>
      )}

      {!showIntro && (
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
