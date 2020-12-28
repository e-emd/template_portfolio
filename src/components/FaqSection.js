import React from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';
import Toggle from './Toggle';
import { About } from '../styles';
import { scrollReveal } from '../animation';
import { UseScroll } from './UseScroll';

const FaqSection = () => {
  const [element, controls] = UseScroll();

  return (
    <Faq
      variants={scrollReveal}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How do I start?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amen.</p>
            <p>
              Lorem ipsum dolor sit, amex consenter border elite. Libero, nihil?
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily schedule?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amen.</p>
            <p>
              Lorem ipsum dolor sit, abet consenter application elia. Libero,
              nihil?
            </p>
          </div>
        </Toggle>
        <Toggle title='Payment methods?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amat.</p>
            <p>
              Lorem ipsum dolor sit, amer connecter amsterdam elite. Libero,
              nihil?
            </p>
          </div>
        </Toggle>
        <Toggle title='Where are we located?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amen.</p>
            <p>
              Lorem ipsum dolor sit, abet consenter attraction eliz. Libero,
              nihil?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
