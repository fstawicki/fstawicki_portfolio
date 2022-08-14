import React from 'react'
import { StyledContact } from './styles/Contact.styled'

import Button from '../components/UI/Button'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import {animateScroll as scroll} from 'react-scroll';
import { FaRegArrowAltCircleUp } from "react-icons/fa";



import bottomwave from '../assets/waves/bottomwave.svg';

const Contact = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  

  return (
    <StyledContact>
      <h3 className='color-white'>Get in touch!</h3>
      <div className="wrapper" name='contact'>
        <div className="flexDiv">
          <div className="contactDiv">
            <p className='color-white'>Personal Data:</p>
            <ul>
              <li><span className='color-accent'>Name: </span>Filip Stawicki</li>
              <li><span className='color-accent'>Date of birth: </span>18.10.1998</li>
              <li><span className='color-accent'>Address: </span>Ożarów Mazowiecki</li>
              <li><span className='color-accent'>Ability to work: </span>After 1 month period of notice</li>
            </ul>
          </div>
          <div className="linksDiv">
            <p className='color-white'>Contact me here:</p>
            <ul className="links">
              <li><span className='color-accent'>Telephone: </span>507483701</li>
              <li><span className='color-accent'>Email: </span>stawicki.filip1@gmail.com</li>
              <li><span className='color-accent'>LinkedIn: </span><a href="https://www.linkedin.com/in/f-stawicki/">Filip Stawicki <FaLinkedin /></a></li>
              <li><span className='color-accent'>Github: </span><a href="https://github.com/fstawicki">fstawicki <FaGithub /></a></li>
            </ul>
          </div>
        </div>
        <Button link={'../assets/CV/STAWICKI_FILIP_CV_ENG.pdf'} download={true} buttonText={'Download CV'} margin={'3rem 0 0 0'} />
        <button className='btnToTop' onClick={scrollToTop}><FaRegArrowAltCircleUp /> Scroll to top</button>
      </div>
      <img className='footerwave' role='presentation' src={bottomwave} alt="" />
    </StyledContact>
  )
}

export default Contact;