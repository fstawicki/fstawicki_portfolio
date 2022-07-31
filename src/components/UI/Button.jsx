import React from 'react'
import { StyledButton } from './Button.styled'

const Button = (props) => {
  return (
    <StyledButton marginright={props.marginright}>
        <a href={props.link}>
            { props.buttonText }
        </a>
    </StyledButton>
  )
}

export default Button