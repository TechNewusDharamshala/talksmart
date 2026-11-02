import React from 'react';
import './Focus.css';

const Focus = () => {
  return (
    <section>
      <div className="container" id="intro">

        <div className="section-head">
          <div className="eyebrow">Our Focus</div>

          <h2>What You’ll Gain?</h2>

          <p>
            You will gain the skills you need to speak clearly,
            feel confident, and perform better in interviews
            and English tests.
          </p>
        </div>

        <div className="value-grid">

          <article className="value-card">
            <img
              src="https://cdn5.planetspark.in/media/small_0_3_409321bf41.png"
              width="300"
              height="200"
              alt="Career growth"
            />
            <h3>Career</h3>
            <p>
              Strengthen communication skills that can support
              academic and professional growth.
            </p>
          </article>

          <article className="value-card">
            <img
              src="https://winskill.org/wp-content/uploads/2026/09/Lets-Speak-English-Classroom-1536x864.jpg"
              width="300"
              height="200"
              alt="English classroom"
            />
            <h3>Confidence</h3>
            <p>
              Improve your ability to express ideas and communicate
              more confidently in English.
            </p>
          </article>

          <article className="value-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQJ89BK_6LsIZG7e-ecT7Ch9D_rowoCWuiC9tVxAtwGBo93UhxMWNirY&s=10"
              width="300"
              height="200"
              alt="English learning"
            />
            <h3>English</h3>
            <p>
              Develop essential English skills including speaking,
              reading, listening, grammar, and vocabulary.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Focus;