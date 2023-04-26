import React from 'react'
import Card from './UI/Card';

import { StyledProjects } from './styles/Projects.styled';

import imagePortfolio from '../assets/images/portfolio.jpg';
import imageMercedes from '../assets/images/mercedes.jpg';
import imageCocktail from '../assets/images/cocktails.jpg';
import imageMoney from '../assets/images/moneybig.jpg';
import imageMexican from '../assets/images/mexican4.png';
import imageSzamaj from '../assets/images/szamaj.jpg';

const Projects = (props) => {
  return (
    <StyledProjects>
        <h3 className='PageTitle'>Projects:</h3>
        <div className="cardsWrapper">
          <Card 
            title={'Portfolio Website'}
            image={imagePortfolio}
            alt={'Portfolio website demo'}
            description={'My portfolio website - You are experiencing it right now ;) Here You can see my work, get to know me and contact me.'}
            area={'card1'}
            link={'#'}
            github={'https://github.com/fstawicki/fstawicki_portfolio'}
          />
          <Card 
            title={'Mercedes Website Clone'}
            image={imageMercedes}
            alt={'Mercedes Website Clone demo'}
            description={'In this project, I created a clone of Mercedes Benz website showcasing an A-class car, using React. I tried to recreate website as accurately as possible.'}
            area={'card2'}
            link={'https://mercedesbenzclone.netlify.app/'}
            github={'https://github.com/fstawicki/MercedesBenzClone'}
          />
          <Card 
            title={'On The Rocks'}
            image={imageCocktail}
            alt={'On The Rocks demo'}
            description={'Website displays various information about cocktails using CocktailDB API. You can search drinks by their name or by searching a random drink.'}
            area={'card3'}
            link={'https://on-the-rocks.netlify.app/'}
            github={'https://github.com/fstawicki/OnTheRocks'}
          />
          <Card 
            title={'Mexican Delivery'}
            image={imageMexican}
            alt={'Mexican Delivery App'}
            description={'E-commerce app for ordering food. It gets data from API and displays it as menu. Customer can add items to cart. App was made with TypeScript, scss and ContextAPI'}
            area={'card4'}
            link={'https://mexicandelivery.netlify.app'}
            github={'https://github.com/fstawicki/MexicanDelivery'}
          />   
          <Card 
            title={'Exchange Rate App'}
            image={imageMoney}
            alt={'Exchange Rate App demo'}
            description={'In this project I created Exchange Rate App, that calculate exchange rate between world curriencies. I used ExchangeRate-API, which support all 161 commonly circulating world currencies.'}
            area={'card5'}
            link={'https://exchangemoneyapp.netlify.app/'}
            github={'https://github.com/fstawicki/ExchangeRateApp'}
          />
          <Card 
            title={'Szamaj Tort'}
            image={imageSzamaj}
            alt={'Szamaj Tort demo'}
            description={"Simple website for pastry shop named 'Szamaj Tort' created with react. Styling done using css modules."}
            area={'card6'}
            link={'https://szamaj-tort.netlify.app/'}
            github={'https://github.com/fstawicki/SzamajTort'}
          />
        </div>
    </StyledProjects>
  )
}

export default Projects;