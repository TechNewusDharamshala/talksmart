
import React, { useState } from 'react';
import './Exams.css';

const examData = [
  {
    title: 'IELTS',
    description:
      'Prepare for IELTS Academic & General Training with focused practice in Speaking, Writing, Reading, vocabulary, grammar, and mock tests.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900',
  },
  {
    title: 'PTE',
    description:
      'Prepare for PTE with computer-based training, question practice, pronunciation, key Speaking and Writing tasks, and timed mock tests.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900',
  },
  {
    title: 'TOEFL',
    description:
      'Prepare for TOEFL iBT with academic English, Writing, note-taking strategies, and full-length mock tests to build confidence and improve exam performance.',
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900',
  },
  {
    title: 'All Exams',
    description:
      'Prepare for Banking, SSC, Defence, Civil Services, Railways, Teaching, Police, Insurance, and other competitive examinations.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yvWwqAFkmoZaYPe44nAF_ZVjkwoBoI5irbLERr0U5XiDJuqvTSJhh8w&s=10',
  },
];

const Exam = () => {
  const [selectedExam, setSelectedExam] = useState(null);

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
          {examData.map((exam) => (
            <article
              className="exam-card"
              key={exam.title}
              onClick={() => setSelectedExam(exam)}
            >
              <h3>{exam.title}</h3>
            </article>
          ))}
        </div>
      </div>

      {selectedExam && (
        <div
          className="exam-modal-overlay"
          onClick={() => setSelectedExam(null)}
        >
          <div
            className="exam-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="exam-modal-close"
              onClick={() => setSelectedExam(null)}
            >
              &times;
            </button>

            <img
              src={selectedExam.image}
              alt={selectedExam.title}
            />

            <div className="exam-modal-content">
              <h2>{selectedExam.title}</h2>
              <p>{selectedExam.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Exam;
