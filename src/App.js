import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './quiz.css';
//import Game from './Game';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div className="myPortfolio">
        <Sidebar/> 
      </div>
    );
  }
}

export default App;
