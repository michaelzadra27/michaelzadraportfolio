import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Landing from './components/landing';
import AboutMe from './components/aboutme';
import Footer from './components/footer';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path= "/">
          <div className="landing">
            <Landing />
          </div>
          </Route>
          <Route exact path= "/about-me">
          <div className="aboutMe">
            <AboutMe />
            <Footer />
          </div>
          </Route>
          <Route exact path= "/projects">
          <div className="projects">
            <Projects />
            <Footer />
          </div>
          </Route>
          <Route exact path= "/contact">
          <div className="contact">
            <Contact />
          </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
