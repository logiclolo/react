import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Sidebar from './Sidebar';
import PortfolioItemPool from './PortfolioItemPool';
import './PortfolioItemPool.css';

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
