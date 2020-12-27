import React from 'react';
import { motion } from 'framer-motion';
import home1 from '../img/home1.png';
import Wave from '../components/Wave';
import { About, Description, Image, Hide } from '../styles';
import { titleAnimation, fade, photoAnimation } from '../animation';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>DREAMS</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true .</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any Photography or Videography ideas that you have we
          are qualifed to capture your needs.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt='guy with camera'
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
