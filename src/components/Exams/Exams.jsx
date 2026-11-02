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
              Prepare for IELTS Academic and General Training with focused Speaking, Writing Task 1 & 2, skimming and scanning techniques, vocabulary and grammar enhancement, and full-length mock tests to boost your confidence and performance.


            </p>
          </article>

          <article className="exam-card">
            <h3>PTE</h3>
            <p>
              Our PTE Course offers 100% computer-based preparation, question-type practice, pronunciation training, Describe Image, Retell Lecture, Write From Dictation, and timed mock tests to build confidence and improve exam performance.


            </p>
          </article>

          <article className="exam-card">
            <h3>TOEFL</h3>
            <p>
              Our TOEFL Course focuses on academic English, writing skills, note-taking techniques, and TOEFL iBT preparation, including full-length mock tests to strengthen your skills, build confidence, and improve exam performance.


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