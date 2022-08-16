import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";

import { Helmet } from 'react-helmet';

import HeroPage from "./components/HeroPage";
import Jobs from "./components/Jobs";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Filip Stawicki</title>
          <link rel="icon" type="image/png" sizes="16x16"  href="favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
          </style>
        </Helmet>

        <HeroPage/>
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;

