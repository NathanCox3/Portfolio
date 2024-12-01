import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Routine from './components/Routine';

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Routine />
      <Projects />
      <Contact />
    </AppContainer>
  );
};

export default App;
