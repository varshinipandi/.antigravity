// src/components/IntroVideo.jsx
import React, { useState, useEffect } from "react";
import BeginVideo from "../assets/BeginVideo.mp4";
import "./IntroVideo.css";

const IntroVideo = ({ onVideoEnd }) => {
  const [videoError, setVideoError] = useState(false);

  // Prevent scrolling while video plays
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleVideoError = () => {
    console.error("Intro video failed to load or play.");
    setVideoError(true);
    // If it fails to load, gracefully end the intro
    onVideoEnd();
  };

  return (
    <div className="video-overlay">
      <video
        src={BeginVideo}
        autoPlay
        muted
        playsInline
        onEnded={onVideoEnd}
        onError={handleVideoError}
        className="intro-video"
      />
      {!videoError && (
        <button className="skip-btn" onClick={onVideoEnd}>
          Skip Intro
        </button>
      )}
    </div>
  );
};

export default IntroVideo;