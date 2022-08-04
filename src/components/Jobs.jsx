import React, { Fragment } from 'react'
import { StyledJobs } from './styles/Jobs.styled'


const Jobs = () => {
  return (
    <Fragment>

    <StyledJobs>
      <div className="wrapper">
        <div className="jobsContainer">
          <h3>Jobs:</h3>
          <ul>
            <li>
              <p className="date">01.01.2021 - in progress</p>
              <p className="name">CIRF - IT center of the Ministry of Finance</p>
              <p className="position red">IT Specialist</p>
              <p className="tasks">Main Tasks:</p>
              <ul className="tasks_list">
                <li>IT network administration;</li>
                <li>Administration of Active Directory services;</li>
                <li>Creating servers' backups,</li>
                <li>Helpdesk - assistance to end users;</li>
                <li>Managing computer equipment in the unit and placing ITorders;</li>
                <li>Granting permissions to local applications.</li>
              </ul>
            </li>
            <li>
              <p className="date red">01.04.2019 - 01.01.2021</p>
              <p className="name red">Chamber of Tax Administration in Warsaw</p>
              <p className="position red">Junior IT Specialist</p>
              <p className="tasks">Main Tasks:</p>
              <ul className="tasks_list">
                <li>Administration of Active Directory services;</li>
                <li>Helpdesk - assistance to end users;</li>
                <li>Managing computer equipment in the unit and placing ITorders;</li>
                <li>Granting permissions to local applications.</li>
              </ul>
            </li>
            <li>
              <p className="date">01.10.2018 - 31.10.2018</p>
              <p className="name">Telit Management</p>
              <p className="position red">IT Researcher</p>
              <p className="tasks">Main Tasks:</p>
              <ul className="tasks_list">
                <li>Searching for job candidates for companies in IT fields;</li>
                <li>Conducting entry job interwievs;</li>
                <li>Expanding candidates' database.</li>
              </ul>            
            </li>
          </ul>
        </div>
        <div className="studyContainer">
          <h3>Studying:</h3>
          <ul>
            <li>
              <p className="date">2021 - progress</p>
              <p className="name">SGGW Warsaw University of Life Sciences</p>
              <p>Computer Science</p>
              <p>Master's Degree</p>
            </li>
            <li>
              <p className="date">2017 - 2021</p>
              <p className="name">SGGW Warsaw University of Life Sciences</p>
              <p>Computer Science</p>
              <p>Obtained Title: Engineer</p>
            </li>
          </ul>
        </div>
      </div>
    </StyledJobs>
    </Fragment>
  )
}

export default Jobs