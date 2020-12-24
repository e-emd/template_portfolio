import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>How do I start?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amen.</p>
          <p>
            Lorem ipsum dolor sit, amex consenter border elite. Libero, nihil?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Daily schedule?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amen.</p>
          <p>
            Lorem ipsum dolor sit, abet consenter application elia. Libero,
            nihil?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Payment methods?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amat.</p>
          <p>
            Lorem ipsum dolor sit, amer connecter amsterdam elite. Libero,
            nihil?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Where are we located?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amen.</p>
          <p>
            Lorem ipsum dolor sit, abet consenter attraction eliz. Libero,
            nihil?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
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
