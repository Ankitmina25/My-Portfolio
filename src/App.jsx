import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CertificatesPage from './components/pages/CertificatesPage';

function PortfolioHome() {
  return (
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
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
