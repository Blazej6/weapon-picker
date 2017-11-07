import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Link  
} from 'react-router-dom'
import './App.css'
import mace from './img/mace.png'
import miecz from './img/miecz.png'
import axe from './img/Axe.png'


class Mace extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 0,
      anglePerClick: 720,
    }
    this.rotateCircle = this.rotateCircle.bind(this);
  }
  rotateCircle() {
    const { currentAngle, anglePerClick } = this.state;
    this.setState({ 
      currentAngle: currentAngle + anglePerClick 
    })
  }    
  render() {
    const circleStyle = {
      transform: `rotateZ(${this.state.currentAngle}deg)`,
      cursor: 'pointer',
      transition: 'transform 3.1s cubic-bezier(0.68, -1.35, 0.265, 1.55)'
    }  

    return (             
          <img src={mace} width='200px' height='200px' alt="" 
               style={circleStyle}
               onClick={this.rotateCircle}/>
    );
  }
}

class Sword extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 0,
      anglePerClick: 720,
    }
    this.rotateCircle = this.rotateCircle.bind(this);
  }
  rotateCircle() {
    const { currentAngle, anglePerClick } = this.state;
    this.setState({ 
      currentAngle: currentAngle + anglePerClick 
    })
  }    
  render() {
    const circleStyle = {
      transform: `rotateZ(${this.state.currentAngle}deg)`,
      cursor: 'pointer',
      transition: 'transform 3.1s cubic-bezier(0.68, -1.35, 0.265, 1.55)'
    }  

    return (             
          <img src={miecz} width='200px' height='200px' alt="" 
               style={circleStyle}
               onClick={this.rotateCircle}/>
    );
  }
}
class Axe extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 0,
      anglePerClick: 720,
    }
    this.rotateCircle = this.rotateCircle.bind(this);
  }
  rotateCircle() {
    const { currentAngle, anglePerClick } = this.state;
    this.setState({ 
      currentAngle: currentAngle + anglePerClick 
    })
  }    
  render() {
    const circleStyle = {
      transform: `rotateZ(${this.state.currentAngle}deg)`,
      cursor: 'pointer',
      transition: 'transform 3.1s cubic-bezier(0.68, -1.35, 0.265, 1.55)'
    }  

    return (             
          <img src={axe} width='200px' height='200px' alt="" 
               style={circleStyle}
               onClick={this.rotateCircle}/>
    );
  }
}



class App extends Component { 
  render() {
     return (
        <div>

        <div class="instruction">
        <div>Pick your weapon</div>
        </div>

        <Router>
          <div className="container">

          <div className="weapon-picker">
            <Link to="/" className="no-underline">Mace</Link>
            <Link to="/Second" className="no-underline">Sword</Link>
            <Link to="/Third" className="no-underline">Axe</Link>
          </div>
            

          <Route exact path="/" component={Mace} />
          <Route path="/Second" component={Sword} />
          <Route path="/Third" component={Axe} />
        </div>
        </Router>

        <div class="instruction">
        <div>Click for presentation</div>
        </div>

        </div>
    )
  }
}
export default App;