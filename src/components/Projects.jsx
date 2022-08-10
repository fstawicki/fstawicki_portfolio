import React from 'react'
import Card from './UI/Card';

import { StyledProjects } from './styles/Projects.styled';

import imagePortfolio from '../assets/images/portfolio.jpg';
import imageMercedes from '../assets/images/mercedes.jpg';
import imageCocktail from '../assets/images/cocktails.jpg';
import imageSzamaj from '../assets/images/szamaj.jpg';

const Projects = (props) => {
  return (
    <StyledProjects>

{/* Simple website for pastry shop 'Szamaj Tort' created with react. */}

        <h3 className='PageTitle'>Projects:</h3>
        <div className="cardsWrapper">
          <Card 
            title={'Portfolio Website'}
            image={imagePortfolio}
            alt={'Portfolio website demo'}
            description={'My portfolio website - You are experiencing it right now ;) Here You can see my work, get to know me and contact me.'}
            area={'card1'}
          />
          <Card 
            title={'Mercedes Website Clone'}
            image={imageMercedes}
            alt={'Mercedes Website Clone demo'}
            description={'In this project, I created a clone of Mercedes Benz website showcasing a A-class car, using React. I tried to recreate website as accurately as possible.'}
            area={'card2'}
          />
          <Card 
            title={'On The Rocks'}
            image={imageCocktail}
            alt={'On The Rocks demo'}
            description={'Website displays various information about cocktails using CocktailDB API. You can search drinks by their name or by searching a random drink.'}
            area={'card3'}
          />
          <Card 
            title={'On The Rocks'}
            image={imageCocktail}
            alt={'On The Rocks demo'}
            description={'Website displays various information about cocktails using CocktailDB API. You can search drinks by their name or by searching a random drink.'}
            area={'card4'}
          />
        </div>
    </StyledProjects>
  )
}

export default Projects;