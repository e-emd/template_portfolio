import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theRacer-small.png';
import goodTimes from '../img/goodTimes-small.png';
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from '../animation';
import { UseScroll } from '../components/UseScroll';

const OurWork = () => {
  const [element, controls] = UseScroll();
  const [element1, controls1] = UseScroll();
  const [element2, controls2] = UseScroll();
  return (
    <Work
      style={{ background: '#fff' }}
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div className='line' variants={lineAnimation}></motion.div>
        <Link to='/work/the-athlete'>
          <Hide>
            <motion.img src={athlete} alt='athlete' variants={photoAnimation} />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade} ref={element1} animate={controls1}>
          The Racer
        </motion.h2>
        <motion.div
          className='line'
          variants={lineAnimation}
          ref={element1}
          animate={controls1}
        ></motion.div>
        <Link to='/work/the-racer'>
          <motion.img
            src={theRacer}
            alt='racer'
            variants={photoAnimation}
            ref={element1}
            animate={controls1}
          />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade} ref={element2} animate={controls2}>
          Good Times
        </motion.h2>
        <motion.div
          className='line'
          ref={element2}
          animate={controls2}
        ></motion.div>
        <Link to='/work/good-times'>
          <motion.img
            src={goodTimes}
            alt='good time'
            variants={photoAnimation}
            ref={element2}
            animate={controls2}
          />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: #000;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
