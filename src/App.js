import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";

import HeroPage from "./components/HeroPage";
import Jobs from "./components/Jobs";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <HeroPage/>
        <About />
        <Jobs />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

