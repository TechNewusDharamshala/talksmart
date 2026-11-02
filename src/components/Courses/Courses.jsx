import React, { useState } from 'react';
import './Courses.css';

const courseData = {
  basic: {
    level: 'Level 01',
    title: 'Basic English',
    description:
      'Basic course is essentially meant for those students who are new to English Language. Though they may have studied in public schools, they have poor knowledge of grammar. These students often suffer from some fundamental problems and form sentences with incorrect tenses, or have a weak vocabulary.',
    topics: [
      'Improve accuracy in Grammar',
      'Expand vocabulary',
      'Develop reading skills',
      'Correct pronunciation',
      'Art of Conversation',
      'Audio sessions for effective listening',
      'Communication in English in day to day situations'
    ]
  },

  intermediate: {
    level: 'Level 02',
    title: 'Intermediate English',
    description:
      'For learners who already understand basic English and want to improve their fluency and communication skills.',
    topics: [
      'Advanced grammar',
      'Vocabulary building',
      'Fluent conversations',
      'Expressing opinions',
      'Workplace communication'
    ]
  },

  advanced: {
    level: 'Level 03',
    title: 'Advanced English',
    description:
      'This course is meant for students who have fair knowledge of grammar and vocabulary but are hesitant and under confident. They may also incorrectly pronounce words.',
    topics: [
      'Advance Grammar for construction & usage of complex sentences',
      'Advance vocabulary',
      'Appropriate usage of idiomatic phrases',
      'Improve public speaking skills',
      'Extempore session, group activities & flip overs',
      'Audio-visual aids'
    ]
  }
};

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const closeCourse = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="alt-section" id="courses">
      <div className="container">

        <div className="section-head">
          <div className="eyebrow">Our Courses</div>
          <h2>Basic to Advanced English</h2>
          <p>
            Choose the level that matches your current English skills and learn step by step with practical communication training. Click “Learn More” on any course to explore its details.
          </p>
        </div>

        <div className="level-grid">

          <article className="level-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N84zeKCxNF5WzA938Ym8m2g6FG7TP2t5R7s2feAPwt8BanbvkidTOdQ&s=10"
              alt="Basic English"
            />
            <div className="level-content">
              <span className="level-badge">Level 01</span>
              <h3>Basic English</h3>
              <button
                className="learn-btn"
                onClick={() => setSelectedCourse(courseData.basic)}
              >
                Learn More →
              </button>
            </div>
          </article>

          <article className="level-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4LP2-NMzj8moFFKFr7QRzdPFY7EEq_zIRuH8Zh63qW955GkCxunafxKY&s=10"
              alt="Intermediate English"
            />
            <div className="level-content">
              <span className="level-badge">Level 02</span>
              <h3>Intermediate English</h3>
              <button
                className="learn-btn"
                onClick={() => setSelectedCourse(courseData.intermediate)}
              >
                Learn More →
              </button>
            </div>
          </article>

          <article className="level-card">
            <img
              src="https://wmace.b-cdn.net/wp-content/uploads/2018/06/advance-english-communication-speaking-classes.jpg"
              alt="Advanced English"
            />
            <div className="level-content">
              <span className="level-badge">Level 03</span>
              <h3>Advanced English</h3>
              <button
                className="learn-btn"
                onClick={() => setSelectedCourse(courseData.advanced)}
              >
                Learn More →
              </button>
            </div>
          </article>

        </div>

        {selectedCourse && (
          <div className="course-modal" onClick={closeCourse}>
            <div
              className="course-modal-content"
              onClick={(event) => event.stopPropagation()}
            >
              <button className="close-modal" onClick={closeCourse}>
                ×
              </button>

              <span className="level-badge">
                {selectedCourse.level}
              </span>

              <h2>{selectedCourse.title}</h2>
              <p>{selectedCourse.description}</p>

              <h3>What You'll Learn</h3>

              <ul>
                {selectedCourse.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>

              <a href="#contact" className="primary-btn" onClick={closeCourse}>
                I'm Interested →
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Courses;