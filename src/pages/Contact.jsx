
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [ratingMessage, setRatingMessage] = useState('Select a rating');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent background scrolling when feedback popup is open
  useEffect(() => {
    document.body.style.overflow = isFeedbackOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isFeedbackOpen]);

  // Contact form submission
  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      course: form.course.value,
      message: form.message.value,
    };

    console.log('Form Data:', formData);

    setIsSubmitting(true);

    // Show feedback popup immediately, as in original HTML
    setIsFeedbackOpen(true);

    // Reset form after collecting values
    form.reset();

    try {
      const response = await fetch(
        'https://talk-smart-backend.vercel.app/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      console.log('Backend Response:', result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Select feedback rating
  const handleRating = (rating) => {
    setSelectedRating(rating);

    const labels = [
      '',
      'Poor',
      'Fair',
      'Good',
      'Very Good',
      'Excellent',
    ];

    setRatingMessage(labels[rating]);
  };

  // Close feedback popup
  const closeFeedbackModal = () => {
    setIsFeedbackOpen(false);
  };

  // Submit feedback
  const handleFeedbackSubmit = () => {
    if (!selectedRating) {
      setRatingMessage('Please select a rating first.');
      return;
    }

    console.log('Feedback:', {
      rating: selectedRating,
      comment: feedbackText,
    });

    setFeedbackSubmitted(true);

    setTimeout(() => {
      setIsFeedbackOpen(false);
      setSelectedRating(0);
      setFeedbackText('');
      setRatingMessage('Select a rating');
      setFeedbackSubmitted(false);
    }, 900);
  };

  return (
    <>
      {/* HEADER */}
      <Navbar />

      {/* MAIN CONTACT PAGE */}
      <main className="chalk-contact">

        {/* TOP INTRO */}
        <section className="chalk-intro">
          <div className="chalk-title">
            <span className="doodle-line">✦</span>

            <h1>GET IN TOUCH</h1>

            <span className="doodle-line">✦</span>
          </div>

          <p>
            Have a question or need more information? Fill out the form below
            and share your details with us. Our team will get in touch with you
            and help you with the information you need.
          </p>

          <div className="future-note">
            Your Future<br />
            Starts Here
            <span>☺</span>
          </div>
        </section>

        {/* WHITEBOARD */}
        <section className="whiteboard">

          <div className="board-frame">

            {/* LEFT SIDE - CONTACT FORM */}
            <div className="board-form">

              <div className="board-heading">
                <span className="board-icon">🎓</span>

                <h2>Send Us a Message</h2>
              </div>

              <div className="orange-line"></div>

              <form
                id="contactForm"
                onSubmit={handleContactSubmit}
              >

                {/* NAME */}
                <div className="chalk-form-group">
                  <label htmlFor="name">
                    <span className="input-icon">♙</span>
                    Name <b>*</b>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* PHONE */}
                <div className="chalk-form-group">
                  <label htmlFor="phone">
                    <span className="input-icon">⌕</span>
                    Phone <b>*</b>
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    maxLength="10"
                    minLength="10"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="chalk-form-group">
                  <label htmlFor="email">
                    <span className="input-icon">✉</span>
                    Email <b>*</b>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                {/* COURSE */}
                <div className="chalk-form-group">
                  <label htmlFor="course">
                    <span className="input-icon">🎓</span>
                    Interested In
                  </label>

                  <select
                    id="course"
                    name="course"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Course
                    </option>

                    <option value="grammar">
                      IELTS
                    </option>

                    <option value="ielts">
                      PTE
                    </option>

                    <option value="personality-development">
                      TOEFL
                    </option>

                    <option value="spoken-english">
                      Interview Preparation & Spoken English
                    </option>

                    <option value="all">
                      Other competitive exams
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="chalk-form-group">
                  <label htmlFor="message">
                    <span className="input-icon">▢</span>
                    Message <b>*</b>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="chalk-submit"
                  id="submitBtn"
                  disabled={isSubmitting}
                >
                  Send Message
                  <span>→</span>
                </button>

                {/* HELP DOODLE */}
                <div className="help-doodle">
                  We're here<br />
                  to help!
                  <span>☺</span>
                </div>

              </form>
            </div>

            {/* VERTICAL LINE */}
            <div className="board-divider"></div>

            {/* RIGHT SIDE - CONTACT INFORMATION */}
            <div className="board-info">

              <div className="board-heading">
                <h2>Contact Information</h2>
              </div>

              <div className="green-line"></div>

              {/* PHONE */}
              <div className="chalk-contact-item">

                <div className="round-icon phone-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <div>
                  <h3>Phone</h3>
                  <p>+91 8091580801</p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="chalk-contact-item">

                <div className="round-icon email-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div>
                  <h3>Email</h3>
                  <p>talksmart144@gmail.com</p>
                </div>

              </div>

              {/* LOCATION */}
              <div className="chalk-contact-item">

                <div className="round-icon location-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div>
                  <h3>Location</h3>

                  <p>
                    59, Civil Lines, above Food Plaza Restaurant,
                    near KCC Bank Head Office, Chilgari,
                    Dharamshala, Himachal Pradesh 176215
                  </p>
                </div>

              </div>

              <div className="chalk-divider"></div>

              {/* GOOGLE MAP */}
              <h3 className="chalk-map-title">
                Find Us on Google Maps
              </h3>

              <div className="chalk-map">
                <iframe
                  src="https://www.google.com/maps?q=NEW+US,+Dharamshala,+Himachal+Pradesh&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Talk Smart location on Google Maps"
                ></iframe>
              </div>

              {/* LEARN DOODLE */}
              <div className="learn-doodle">
                Learn<br />
                Grow<br />
                Achieve
              </div>

            </div>
          </div>

          {/* BOARD BOTTOM */}
          <div className="marker-holder">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </section>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FEEDBACK POPUP */}
      <div
        className={`feedback-modal ${isFeedbackOpen ? 'show' : ''}`}
        id="feedbackModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedbackTitle"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeFeedbackModal();
          }
        }}
      >
        <div className="feedback-box">

          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="feedback-close"
            id="feedbackClose"
            aria-label="Close feedback"
            onClick={closeFeedbackModal}
          >
            &times;
          </button>

          <h2 id="feedbackTitle">
            How was your experience?
          </h2>

          <p>
            We'd love to know how your experience was with Talk Smart.
          </p>

          {/* RATING STARS */}
          <div
            className="rating-stars"
            id="ratingStars"
            aria-label="Rate your experience from 1 to 5 stars"
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                className={`rating-star ${
                  rating <= selectedRating ? 'active' : ''
                }`}
                aria-label={`${rating} star${rating > 1 ? 's' : ''}`}
                onClick={() => handleRating(rating)}
              >
                ★
              </button>
            ))}
          </div>

          <p className="rating-label" id="ratingLabel">
            {ratingMessage}
          </p>

          {/* FEEDBACK TEXT */}
          <textarea
            className="feedback-text"
            id="feedbackText"
            placeholder="Tell us what you liked or what we can improve... (optional)"
            value={feedbackText}
            onChange={(event) => setFeedbackText(event.target.value)}
          ></textarea>

          {/* FEEDBACK SUBMIT */}
          <button
            type="button"
            className="feedback-submit"
            id="feedbackSubmit"
            onClick={handleFeedbackSubmit}
          >
            {feedbackSubmitted ? 'Thank You! ✓' : 'Submit Feedback'}
          </button>

        </div>
      </div>
    </>
  );
};

export default Contact;
