import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theRacer-small.png';
import goodTimes from '../img/goodTimes-small.png';
import { pageAnimation } from '../animation';

const OurWork = () => {
  return (
    <Work
      style={{ background: '#fff' }}
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link to='/work/the-athlete'>
          <img src={athlete} alt='athlete' />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className='line'></div>
        <Link to='/work/the-racer'>
          <img src={theRacer} alt='racer' />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className='line'></div>
        <Link to='/work/good-times'>
          <img src={goodTimes} alt='good time' />
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
    color: #fff;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
