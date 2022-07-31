import React from 'react'
import { StyledHeroPage } from './styles/HeroPage.styled'
import Button from './UI/Button'

import wave from '../assets/images/waves/wave.svg';

const HeroPage = () => {
  return (
      <StyledHeroPage>
          <div className="container">
            <div className="introText">
              <p className='accent'>Hi, my name is</p>
              <h1>Filip Stawicki.</h1>
              <p>Studying computer science, working as a system administrator. Currently, I am focused on learning React and becoming frontend developer.</p>
            </div>
            <div className="buttons">
              <Button marginright='3rem' link={'#'} buttonText={'Learn more about me'} />
              <Button link={'#'} buttonText={'Download CV'} />
            </div>
          </div>
        <img className='waveIMG' src={wave} role="presentation" alt=""/>
      </StyledHeroPage>
  )
}

export default HeroPage
