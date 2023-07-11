import React from 'react';
import { StyledAbout } from './styles/About.styled';

import imageFilip from '../assets/images/Filip.jpg';

const About = () => {
  return (
    <StyledAbout>
      <div className="infoText">
        <h3 className="aboutme">About Me:</h3>
        <p>I completed my masters studies in Computer Science at the Faculty of Applied Informatics and Mathematics at the Warsaw University of Life Sciences. I have been working as an IT specialist since 2019. My professional goal is to work as a Front-end Developer. I am interested in React, in which I am constantly improving. My native language is Polish. I also speak English at C1 level.</p>
      </div>
      <div className="imageDiv">
        <img src={imageFilip} alt="Filip Stawicki" className="myImg" />
      </div>
    </StyledAbout>
  )
}

export default About