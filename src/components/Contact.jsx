import React from 'react'
import { StyledContact } from './styles/Contact.styled'

const Contact = () => {
  return (
    <StyledContact>
      <h3 className='color-white'>Get in touch!</h3>
      <div className="wrapper">
        <div className="flexDiv">
          <div className="contactDiv">
            <p className='color-white'>Personal Data</p>
            <ul>
              <li><span className='color-accent'>Name: </span>Filip Stawicki</li>
              <li><span className='color-accent'>Date of birth: </span>18.10.1998</li>
              <li><span className='color-accent'>Address: </span>Ożarów Mazowiecki</li>
              <li><span className='color-accent'>Ability to work: </span> After 1 month - period of notice</li>
            </ul>
          </div>
          <div className="linksDiv">
            <p className='color-white'>Contact me here</p>
            <ul className="links">
              <li><span className='color-accent'>Telephone: </span>507483701</li>
              <li><span className='color-accent'>Email: </span>stawicki.filip1@gmail.com</li>
              <li><span className='color-accent'>Github: </span><a href="https://github.com/fstawicki">fstawicki</a></li>
            </ul>
          </div>
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact;