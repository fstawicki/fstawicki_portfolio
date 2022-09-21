import React from 'react';
import { StyledHeroPage } from './styles/HeroPage.styled';
import Button from './UI/Button';

import { Link } from 'react-scroll';

import wave from '../assets/waves/wave.svg';

const HeroPage = () => {

  return (
      <StyledHeroPage>
        <div className="container">
          <div className="introText">
            <p className='accent'>Hi, 👋 my name is</p>
            <h1>Filip Stawicki.</h1>
            <p>Studying computer science, working as a system administrator. Currently, I am focused on learning React and becoming frontend developer.</p>
          </div>
          <div className="buttons">
            <Link 
              className='btn'
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={800}>
                Contact Me
            </Link>
            <Button buttonText={'Download ENG CV'} pdf={'STAWICKI_FILIP_CV_ENG.pdf'} />
          </div>
        </div>
        <img className='waveIMG' src={wave} role="presentation" alt=""/>
      </StyledHeroPage>
  )
}

export default HeroPage
