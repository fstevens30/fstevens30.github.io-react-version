import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav/Nav.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import TechSkills from './components/TechSkills/TechSkills.jsx';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';


export default function App () {
  return (
    <main>
      <Nav/>
      <Hero/>
      <About/>
      <TechSkills/>
      <Contact/>
      <Projects/>
      <Footer/>
    </main>
  );
}
