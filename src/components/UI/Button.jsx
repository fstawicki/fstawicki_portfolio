import React from 'react'
import { StyledButton } from './Button.styled'

const Button = ( props ) => {
  return (
    <StyledButton margin={ props.margin }>
        <a href={ props.link } download={props.download}>
            { props.buttonText }
        </a>
    </StyledButton>
  )
}

export default Button