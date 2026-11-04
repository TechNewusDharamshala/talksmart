import React from 'react';
import './About.css';

import image1 from '../../assets/images/i1.jpg';
import image2 from '../../assets/images/i2.png';
import image3 from '../../assets/images/i3.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="container about-grid">

        <div className="about-image">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QZjJ-l6p5fQ?si=yUvz8VGJkIaYWR6m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="about-copy">
          <div className="eyebrow">About Us</div>

          <h2>Want to Speak English with Confidence?</h2>

          <p>
            At Talk Smart English Training, Dharamshala, we help you develop
            practical English skills that you can use in real conversations,
            interviews, and English tests.
          </p>

          <p>
            From grammar and vocabulary to reading, listening, speaking,
            and fluency, we’ll build your skills step by step — from the
            basics to advanced communication.
          </p>
        </div>

      </div>

      {/* Gallery */}
      <div className="about-gallery container">
        <img src={image1} alt="Talk Smart training" />
        <img src={image2} alt="Talk Smart classroom" />
        <img src={image3} alt="Talk Smart students" />
      </div>

    </section>
  );
};

export default About;