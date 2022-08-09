import React from 'react'

import { StyledProjects } from './styles/Projects.styled';
import image from '../assets/images/testIMG.png';
import Card from './UI/Card';

const Projects = (props) => {
  return (
    <StyledProjects>
        <h3 className='PageTitle'>Projects:</h3>
        <div className="cardsWrapper">
          <Card 
            title={'Project 1'}
            image={image}
            alt={'Project 1 demo'}
            description={'gówno'}
            area={'card1'}
          />
          <Card 
            title={'Project 12222'}
            image={image}
            alt={'Project 1 demo'}
            description={'gówno'}
            area={'card2'}
          />
          <Card 
            title={'Project 13333'}
            image={image}
            alt={'Project 1 demo'}
            description={'gówno'}
            area={'card3'}
          />
        </div>
    </StyledProjects>
  )
}

export default Projects;