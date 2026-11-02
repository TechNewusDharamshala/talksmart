import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="alt-section" id="skills">
      <div className="container">

        <div className="section-head">
          <div className="eyebrow">Skills</div>

          <h2>What We Teach</h2>

          <p>
            A practical foundation for improving everyday English
            communication.
          </p>
        </div>

        <div className="skill-grid">

          <article className="skill-card">
            <h3>Reading Skills</h3>
            <p>Build comprehension, reading ability, and useful vocabulary.</p>
          </article>

          <article className="skill-card">
            <h3>Speaking & Fluency</h3>
            <p>Develop confidence in everyday conversations and speaking.</p>
          </article>

          <article className="skill-card">
            <h3>Grammar</h3>
            <p>Understand grammar concepts and apply them in communication.</p>
          </article>

          <article className="skill-card">
            <h3>Listening</h3>
            <p>Improve your ability to understand spoken English.</p>
          </article>

          <article className="skill-card">
            <h3>Vocabulary</h3>
            <p>Learn words and expressions useful for communication.</p>
          </article>

          <article className="skill-card">
            <h3>Communication</h3>
            <p>Practice expressing thoughts clearly and confidently.</p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Skills;