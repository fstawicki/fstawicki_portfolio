import React from 'react'
import { StyledHeroPage } from './styles/HeroPage.styled'

const HeroPage = () => {
  return (
    <StyledHeroPage>
      <div className="introText">
        <p className='accent'>Hi, my name is</p>
        <h1>Filip Stawicki.</h1>
        <p>Studying computer science, working as a system administrator. Currently, I am focused on learning React and becoming frontend developer.</p>
      </div>
      <div className="buttons">

      </div>
    </StyledHeroPage>
  )
}

export default HeroPage
