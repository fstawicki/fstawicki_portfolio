import React from 'react'
import { StyledCard } from './Card.styled'

const Card = (props) => {
  return (
    <StyledCard area={props.area}>
      <div className="wrapper">
        <img className='projectImage' src={ props.image } alt={props.alt} />
        <p className="title">{ props.title }</p>
        <p className="description">{ props.description }</p>
      </div>
      <div className="links">
          <a href={ props.link }>See Demo </a>
          <a href={ props.github }>See github</a>
      </div>
    </StyledCard>
  )
}

export default Card