import React from 'react'
import { StyledCard } from './Card.styled'
import Button from './Button'


// import image from '../../assets/images/testIMG.png';

const Card = (props) => {
  return (
    <StyledCard href='#' area={props.area} className={props.addClass}>
        <img className='projectImage' src={ props.image } alt="project 1 demo" />
        <p className="title">{ props.title }</p>
        <p className="description">{ props.description }</p>
        <div className="links">
            <Button margin={'1rem 0'} link={'#'} buttonText={'Live demo'} />
            <Button margin={'1rem 0'} link={'#'} buttonText={'See Github'} />
        </div>
    </StyledCard>
  )
}

export default Card