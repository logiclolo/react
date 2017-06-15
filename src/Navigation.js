import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PortfolioItemPool.css';
import Header from './Header';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Link
} from 'react-router-dom';

class Navigation extends Component {

	reload() {
		setTimeout(function(){location.reload()}, 100)
	}

	render() {

		var key = this.props.c_key
		var length = this.props.category[key].length
		var pre_index = (this.props.index > 0)? this.props.index -1 : length - 1  
		var pre_path = this.props.category[key][pre_index] 

		var next_index = (this.props.index + 1) % length  
		var next_path = this.props.category[key][next_index] 

		return(
			<div>
			<Link to={pre_path} onClick={()=>this.reload()} className='previous-p'>
				<span>&larr;</span>Previous
			</Link>
			<Link to={next_path} onClick={()=>this.reload()} className='next-p'>
				Next<span>&rarr;</span>
			</Link>
			</div>
		)
	
	}
}

export default Navigation;
