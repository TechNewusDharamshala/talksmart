import React from 'react';
import './Hero.css';

import heroBg from '../../assets/images/i2.png';

const Hero = () => {
  return (
    <section className="welcome-hero" id="home">

      <img
        className="welcome-bg"
        src={heroBg}
        alt="Students learning English in a classroom"
      />

      <div className="container">
        <div className="welcome-content">

          <div className="brand-kicker">
            
          </div>

          <h1>
            TALK <span>SMART</span>
          </h1>

          <p>
            Think in English. Speak in English.
          </p>

          <p className="welcome-subtitle">
            We’ll help you stop translating every sentence in your mind
            and build the confidence to think, respond, and speak
            naturally in English.
          </p>

          <p className="thought">
            “Learn English. Build Your Confidence. In 45 Days.”
          </p>

          <a href="#intro" className="primary-btn">
            Get Started →
          </a>

        </div>
      </div>

    </section>
  );
};

export default Hero;