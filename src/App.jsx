import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
