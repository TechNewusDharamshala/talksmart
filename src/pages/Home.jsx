import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Focus from '../components/Focus/Focus';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import Courses from '../components/Courses/Courses';
import Exam from '../components/Exams/Exams';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Focus />
      <Skills />
      <About />
      <Courses />
      <Exam />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;