import React from 'react'
import { StyledJobs } from './styles/Jobs.styled'

import wave2 from '../assets/waves/wave2.svg';

import { FiChevronRight } from "react-icons/fi";
 
const Jobs = () => {
  return (
    <StyledJobs>
    <img className='wave2IMG' src={ wave2 } role="presentation" alt=""/>
      <div className="wrapper">
        <div className="jobsContainer">
          <h3>Jobs:</h3>
          <ul className='jobsList'>
            <li className='jobsListItem'>
              <p className="date red">01.01.2021 - in progress</p>
              <p className="name red">CIRF - IT center of the Ministry of Finance</p>
              <p className="position red">IT Specialist</p>
              <p className="tasks">Main Tasks:</p>
              <ul className="tasks_list">
                <li><FiChevronRight /> IT network administration;</li>
                <li><FiChevronRight /> Administration of Active Directory services;</li>
                <li><FiChevronRight /> Creating servers' backups,</li>
                <li><FiChevronRight /> Helpdesk - assistance to end users;</li>
                <li><FiChevronRight /> Managing computer equipment in the unit and placing IT orders;</li>
                <li><FiChevronRight /> Granting permissions to local applications.</li>
              </ul>
            </li>
            <li className='jobsListItem'>
              <p className="date red">01.04.2019 - 01.01.2021</p>
              <p className="name red">Chamber of Tax Administration in Warsaw</p>
              <p className="position red">Junior IT Specialist</p>
              <p className="tasks">Main Tasks:</p>
              <ul className="tasks_list">
                <li><FiChevronRight /> Administration of Active Directory services;</li>
                <li><FiChevronRight /> Helpdesk - assistance to end users;</li>
                <li><FiChevronRight /> Managing computer equipment in the unit and placing IT orders;</li>
                <li><FiChevronRight /> Granting permissions to local applications.</li>
              </ul>
            </li>
            <li className='jobsListItem'>
              <p className="date red">01.10.2018 - 31.10.2018</p>
              <p className="name red">Telit Management</p>
              <p className="position red">IT Researcher</p>
              <p className="tasks">Main Tasks:</p>
              <ul className="tasks_list">
                <li><FiChevronRight /> Searching for job candidates for companies in IT fields;</li>
                <li><FiChevronRight /> Conducting entry job interwievs;</li>
                <li><FiChevronRight /> Expanding candidates' database.</li>
              </ul>            
            </li>
          </ul>
        </div>
        <div className="studyContainer">
          <h3>Studying:</h3>
          <ul className='jobsList'>
            <li className='jobsListItem'>
              <p className="date red">2021 - in progress</p>
              <p className="uni red ">SGGW Warsaw University of Life Sciences</p>
              <p>Computer Science</p>
              <p>Master's Degree</p>
            </li>
            <li className='jobsListItem'>
              <p className="date red">2017 - 2021</p>
              <p className="uni red">SGGW Warsaw University of Life Sciences</p>
              <p>Computer Science</p>
              <p>Obtained Title: Engineer</p>
            </li>
          </ul>
        </div>
      </div>
    </StyledJobs>
  )
}

export default Jobs