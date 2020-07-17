import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper';
import './App.css';

import "../node_modules/video-react/dist/video-react.css";

import Greet from './Greeting/Greet.js'
import Nav from './Nav/Nav.js'
import Projects from './Projects/Projects';
import Footer from './components/Footer/Footer'
import About from './About/About'
import ContactInfo from './components/ContactInfo/ContactInfo'
import Resume from './Resume/Resume'

import BgSketch from './Sketches/background'
import Modal from './Modal/Modal';




class App extends Component {
  constructor () {
    super();
    this.state ={
      windowWidth: window.innerWidth,
    }
    
    this.windowResized = this.windowResized.bind(this)
  }

  windowResized() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  componentDidMount () {
    window.addEventListener("resize", this.windowResized)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.windowResized)
  }

  render() {
    
    
    return (
      <Router>
        <div className='container'>
          
        

          <Greet windowWidth={this.state.windowWidth} />

          <div className='bgSketch'>
            <P5Wrapper sketch={BgSketch} />
          </div>

          {/* <Nav class={'nav'}/> */}

          <Switch>

            <Route path='/about' render={() => <Modal><About /></Modal>} />
            <Route path='/contact' render={() => <Modal><ContactInfo /></Modal>} />
            <Route path='/resume' render={() => <Modal><Resume /></Modal>} />
            <Route path='/projects' render={({ match }) => <Modal><Projects match={match} />  </Modal>} />
            <Route path='/' render={() => (<Nav class={'nav'} />)} />
          </Switch>


  

          <Footer />

        </div>
      </Router>
    );
  }
}



export default App;

