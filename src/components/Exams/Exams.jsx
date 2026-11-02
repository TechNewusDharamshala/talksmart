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
              IELTS Course includes Academic and General Training preparation
              with focused IELTS Speaking practice and Writing Task 1 and
              Task 2 training. You will also work on skimming and scanning
              techniques, vocabulary and grammar enhancement, and full-length
              IELTS mock tests.
            </p>
          </article>

          <article className="exam-card">
            <h3>PTE</h3>
            <p>
              Our PTE Course provides 100% computer-based test preparation
              with PTE question-type practice and pronunciation training.
              The course includes Describe Image, Retell Lecture, Write From
              Dictation, and timed PTE mock tests to help you practice the
              key parts of the exam.
            </p>
          </article>

          <article className="exam-card">
            <h3>TOEFL</h3>
            <p>
              TOEFL Course focuses on academic English preparation with
              academic writing skills, note-taking techniques, and TOEFL
              iBT test training. You will also practice with full-length
              TOEFL mock tests to prepare for the exam.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Exam;