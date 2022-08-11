import React from 'react';
import { StyledFooter } from './styles/Footer.styled';

import {animateScroll as scroll} from 'react-scroll';

import footerwave from '../assets/waves/footerwave.svg';

import { FaRegArrowAltCircleUp } from "react-icons/fa";


const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
      <StyledFooter>
        <img src={footerwave} alt="" />
        <div className="wrapper">
            <button onClick={scrollToTop}><FaRegArrowAltCircleUp /> Scroll to top</button>
            <p>Created by Filip Stawicki, 2022</p>
        </div>
    </StyledFooter>
  )
}

export default Footer