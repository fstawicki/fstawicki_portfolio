import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./components/styles/Theme";

import HeroPage from "./components/HeroPage";
import Jobs from "./components/Jobs";
import About from "./components/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeroPage/>
        <About />
        <Jobs />
      </div>
    </ThemeProvider>
  );
}

export default App;
