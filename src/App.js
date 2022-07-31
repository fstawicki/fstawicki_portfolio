import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./components/styles/Theme";

import HeroPage from "./components/HeroPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeroPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;
