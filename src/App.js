import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Link  
} from 'react-router-dom'
import './App.css'
import mace from './img/mace.jpg'
import miecz from './img/miecz.jpg'
import axe from './img/Axe.jpg'

const Mace = () => <img src={mace} width='200px' height='200px' alt="" />

const Sword = () => <img src={miecz} width='200px' height='200px' alt=""/>

const Axe = () => <img src={axe} width='200px' height='200px' alt="" />


const App = () => 
  
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

  </div>
export default App;