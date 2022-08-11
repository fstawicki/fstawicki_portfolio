import React from 'react';
import { StyledFooter } from './styles/Footer.styled';

import footerwave from '../assets/waves/footerwave.svg';

const Footer = () => {
  return (
      <StyledFooter>
        <img src={footerwave} alt="" />
        <div className="wrapper">
            <p>Created by Filip Stawicki, 2022</p>
            <a href="#">^ Scroll to top</a>
        </div>
    </StyledFooter>
  )
}

export default Footer