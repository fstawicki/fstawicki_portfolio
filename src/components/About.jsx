import React from 'react'
import { StyledAbout } from './styles/About.styled'

import imageFilip from '../assets/images/Filip_usmiech.jpg';


const About = () => {
  return (
    <StyledAbout>
      <div className="infoText">
        <h2 className="aboutme">About Me</h2>
        <p>I graduated from engineering studies in Computer Science at the Faculty of Applied Informatics and Mathematics at the Warsaw University of Life Sciences. Currently, I am continuing my studies in order to earn a master's degree. I have been working as an IT specialist for 3 years. My professional goal is to work as a Front-end Developer. I am interested in React, in which I am constantly improving.</p>
        <p className='whitecolor'>Here are technologies and tools I have worked with before:</p>
        <div className="technologies">
            <ul className="technologiesList">
                <li>👉 React</li>
                <li>👉 Javascript</li>
                <li>👉 HTML</li>
                <li>👉 CSS, SCSS, Styled Components, CSS Modules</li>
                <li>👉 Git</li>
                <li>👉 Figma</li>
                <li>👉 Visual Studio Code, Atom</li>
            </ul>
        </div>
      </div>
      <div className="imageDiv">
        <img src={imageFilip} alt="Filip Stawicki" className="myImg" />
      </div>
    </StyledAbout>
  )
}

export default About