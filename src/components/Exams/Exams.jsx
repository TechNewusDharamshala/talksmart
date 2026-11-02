import React from 'react';
import './Exams.css';

const Exam = () => {
  return (
    <section id="exams">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Preparation</div>
          <h2>Exam Preparation in 2 months</h2>
          <p>
            Dedicated preparation can be presented here once the
            institute's officially offered examinations are confirmed.
          </p>
        </div>

        <div className="exam-grid">
          <article className="exam-card">
            <h3>IELTS</h3>
            <p>
              Prepare for IELTS Academic & General Training with focused practice in Speaking, Writing, Reading, vocabulary, grammar, and mock tests.
            </p>
          </article>

          <article className="exam-card">
            <h3>PTE</h3>
            <p>
            Prepare for PTE with computer-based training, question practice, pronunciation, key Speaking and Writing tasks, and timed mock tests.
            </p>
          </article>

          <article className="exam-card">
            <h3>TOEFL</h3>
            <p>
             Prepare for TOEFL iBT with academic English, Writing, note-taking strategies, and full-length mock tests to build confidence and improve exam performance.
            </p>
          </article>
          <article className="exam-card">
            <h3>All Competitive Exams</h3>
            <p>
              Banking , SSC, Defence, Civil Services, Railways, Teaching, Police, Insurance, and other competitive exams preparation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Exam;