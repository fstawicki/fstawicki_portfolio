import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

html{
  font-size: 16px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}

body{
  background-color: '#0c1c2c';
}

`

export default GlobalStyles;