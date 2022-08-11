import React from 'react'
import { StyledHeroPage } from './styles/HeroPage.styled'
import Button from './UI/Button'

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
              <Button margin={'2rem 2rem 0 0'} link={'#'} buttonText={'Contact me'} />
              <Button link={'../assets/CV/STAWICKI_FILIP_CV_ENG.pdf'} download={true} buttonText={'Download CV'} />
            </div>
          </div>
        <img className='waveIMG' src={wave} role="presentation" alt=""/>
      </StyledHeroPage>
  )
}

export default HeroPage
