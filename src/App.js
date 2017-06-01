import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './quiz.css';
import Sidebar from './Sidebar';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Quiz from './Quiz';

class App extends Component {

  render() {
    const home = () => ( 
      <Sidebar/>
    )	

    const portfolioitem1 = () => ( 
      <div className='main-portfolio-fullscreen'>
        <Quiz/>
      </div>
    )	

    return (
      <Router>
      <Switch>
	<Route path='/portfolioitem1' component={portfolioitem1} />
	<Route path='/' component={home}/>
      </Switch>
      </Router>
    );
  }
}

export default App;
