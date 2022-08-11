import React from 'react';
import { StyledFooter } from './styles/Footer.styled';

import wave from '../assets/waves/wave.svg';

const Footer = () => {
  return (
      <StyledFooter>
        <img src={wave} alt="" />
        <p>Created by Filip Stawicki, 2022</p>
        <a href="#">^ To Top</a>
    </StyledFooter>
  )
}

export default Footer