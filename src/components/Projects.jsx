import React from 'react'

import Button from './UI/Button'

import { StyledProjects } from './styles/Projects.styled';
import image from '../assets/images/testIMG.png';

const Projects = () => {
  return (
    <StyledProjects>
        <h3 className='PageTitle'>Projects:</h3>
        <div className="card">
          <img className='projectImage' src={ image } alt="project 1 demo" />
          <p className="title">Project 1</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, harum.</p>
          <div className="links">
            <Button margin={'1rem 0'} link={'#'} buttonText={'Live demo'} />
            <Button margin={'1rem 0'} link={'#'} buttonText={'See Github'} />
          </div>
        </div>

    </StyledProjects>
  )
}

export default Projects;