import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import HowItWorks from '../components/landing/HowItWorks';
import ProjectsShowcase from '../components/landing/ProjectsShowcase';
import CoursesPreview from '../components/landing/CoursesPreview';
import StorePreview from '../components/landing/StorePreview';
import Testimonials from '../components/landing/Testimonials';
import ContactForm from '../components/landing/ContactForm';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <ProjectsShowcase />
      <CoursesPreview />
      <StorePreview />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
