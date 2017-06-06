import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PortfolioItemPool.css';
import Header from './Header';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
//import portfolioitem1 from './Quiz';
import Quiz from './Quiz';

class PortfolioItemDetail extends Component {
	render() {
		return(
			<div className='portfolioitem-detail'>
				<Route path='/portfolioitem1' component={Quiz} />
			</div>
		) 	
	}
}

export default PortfolioItemDetail;
