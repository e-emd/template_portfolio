import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import { pageAnimation } from '../animation';

const AboutUs = () => {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
