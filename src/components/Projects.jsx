import React from 'react'
import { StyledProjects } from './styles/Projects.styled'

const Projects = () => {
  return (
    <StyledProjects>
        <h3>Projects:</h3>
        <div className="card">
          <img src="" alt="project 1 demo" />
          <p className="title">Project 1</p>
          <p className="decription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, harum.</p>
          <a href="" className="link button">See live demo</a>
          <a href="" className="link button">Go to Github</a>
        </div>

    </StyledProjects>
  )
}

export default Projects;