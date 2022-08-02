import React, { Fragment } from 'react'
import { StyledAbout } from './styles/About.styled'

import wave2 from '../assets/images/waves/wave2.svg';

const About = () => {
  return (
    <Fragment>

    <StyledAbout>
      <div className="wrapper">
        <div className="jobsContainer">
          <h3>Jobs:</h3>
          <ul>
            <li>
              <p>CIRF - IT center of the Ministry of Finance</p>
              <p className="date"></p>
              <p></p>
            </li>
            <li>
              <p>Chamber of Tax Administration in Warsaw</p>
              <p className="date"></p>
              <p></p>
            </li>
            <li>
              <p>Telit Management: Researcher</p>
              <p className="date"></p>
              <p>Main responsibilities consisted of searching for job candidates for companies in IT fields, conducting entry job interwievs, expanding candidates' database</p>              
            </li>
          </ul>
        </div>
        <div className="studyContainer">
          <h3>Studying:</h3>
          <ul>
            <li>
              <p>SGGW - Computer Science - engeneer's degree</p>
              <p className="date"></p>
              <p></p>
            </li>
            <li>
              <p>SGGW - Computer Science - master's degree</p>
              <p className="date"></p>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    <img className='waveIMG' src={wave2} role="presentation" alt=""/>
    </StyledAbout>
    </Fragment>
  )
}

export default About