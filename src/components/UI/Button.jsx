import React from 'react'
import { StyledButton } from './Button.styled'

const Button = ( props ) => {

  const downloadCV = () => {
    fetch(props.pdf).then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = props.pdf;
            alink.click();
        })
    })
  }

  return (
    <StyledButton onClick={downloadCV}>
      { props.buttonText }
    </StyledButton>
  )
}

export default Button