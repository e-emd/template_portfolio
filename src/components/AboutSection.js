import React from 'react';
import styled from 'styled-components';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>DREAMS</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true .</h2>
          </Hide>
        </div>
        <p>
          Contact us for any Photography or Videography ideas that you have we
          are qualifed to capture your needs.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt='guy with camera' />
      </Image>
    </About>
  );
};

export default AboutSection;
