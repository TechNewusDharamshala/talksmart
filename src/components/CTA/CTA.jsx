import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="container cta-content">
        <h2>Ready to Improve Your English?</h2>

        <p>
          Tell us about your English-learning goals. Click "Contact Us"
          below to fill out the form, and our team will contact you
          with more information about the training.
        </p>

        <a href="/contact.html" className="primary-btn">
          Contact Us →
        </a>
      </div>
    </section>
  );
};

export default CTA;