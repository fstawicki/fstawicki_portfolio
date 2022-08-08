import React from 'react'
import { StyledProjects } from './styles/Projects.styled';
import image from '../assets/images/testIMG.png';

const Projects = () => {
  return (
    <StyledProjects>
        <h3>Projects:</h3>
        <div className="card">
          <img className='projectImage' src={image} alt="project 1 demo" />
          <p className="title">Project 1</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, harum.</p>
          <div className="links">
            <a href="#" className="link button">See live demo</a>
            <a href="#" className="link button">Go to Github</a>
          </div>
        </div>

    </StyledProjects>
  )
}

export default Projects;