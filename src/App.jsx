import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Intro from './components/layout/Intro';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <Intro onComplete={() => setIntroComplete(true)} />
      {introComplete && (
        <Layout>
          <Hero />
          <About />
          <Education />
          <TechStack />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </Layout>
      )}
    </>
  );
}

export default App;
