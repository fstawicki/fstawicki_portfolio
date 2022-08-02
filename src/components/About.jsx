import React, { Fragment } from 'react'
import { StyledAbout } from './styles/About.styled'


const About = () => {
  return (
    <Fragment>

    <StyledAbout>
      <div className="wrapper">
        <div className="jobsContainer">
          <h3>Jobs:</h3>
          <ul>
            <li>
              <p className="name">CIRF - IT center of the Ministry of Finance</p>
              <p className="date"></p>
              <p className="tasks">Main Tasks:</p>
              <ul className="tasks_list">
                <li></li>
              </ul>
            </li>
            <li>
              <p className="name">Chamber of Tax Administration in Warsaw</p>
              <p className="date"></p>
              <p className="tasks">Main Tasks:</p>
              <ul className="tasks_list">
                <li></li>
              </ul>
            </li>
            <li>
              <p className="name">Telit Management: Researcher</p>
              <p className="date"></p>
              <p className="tasks">Main Tasks:</p>
              <ul className="tasks_list">
                <li>Searching for job candidates for companies in IT fields</li>
                <li>Conducting entry job interwievs</li>
                <li>Expanding candidates' database</li>
              </ul>            
            </li>
          </ul>
        </div>
        <div className="studyContainer">
          <h3>Studying:</h3>
          <ul>
            <li>
              <p className="name">SGGW - Computer Science - engeneer's degree</p>
              <p className="date"></p>
              <p></p>
            </li>
            <li>
              <p className="name">SGGW - Computer Science - master's degree</p>
              <p className="date"></p>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </StyledAbout>
    </Fragment>
  )
}

export default About