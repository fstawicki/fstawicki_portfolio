import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

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

h3{
    font-size: 3rem;
    color: white;
}

`

export default GlobalStyles;