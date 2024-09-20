import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/ContactPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </>
  );
}

export default App;
