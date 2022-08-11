import React from 'react'
import { StyledCard } from './Card.styled'
import Button from './Button'


// import image from '../../assets/images/testIMG.png';

const Card = (props) => {
  return (
    <StyledCard area={props.area} className={props.addClass}>
      <div className="wrapper">
        <img className='projectImage' src={ props.image } alt={props.alt} />
        <p className="title">{ props.title }</p>
        <p className="description">{ props.description }</p>
      </div>
      <div className="links">
          <Button margin={'1rem 0'} link={ props.link } buttonText={'Live demo'} />
          <Button margin={'1rem 0'} link={ props.github } buttonText={'See Github'} />
      </div>
    </StyledCard>
  )
}

export default Card