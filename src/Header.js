import React, { Component } from 'react';
import './PortfolioItemPool.css';
import logopic from './img/logo.jpg';
import $ from 'jquery';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link
} from 'react-router-dom';

class MenuBar extends Component {

	onClick() {
		$('.main-portfolio').addClass('blurin')
		$('.Sidebar').css('left', 0)
		//document.getElementsByClassName('main-portfolio').classList.add('blurin')
		
	}

	render() {
		const logo = 'WALO' 
		return(	
			<div className='menu-wrapper'>
				<div className='logo'>
					<img src={logopic}/>
				</div>
				<div className='menu'>
					<a className='menu-bar' onClick={()=>this.props.onClick()}>		
						<span className='ham'>
						</span>
					</a>
				</div>
			</div>
		)
	}
}

class Header extends Component {
	render() {
		return(	
			<div className='header'>		
				<MenuBar onClick={()=>this.props.onClick()} />
			</div>
		)
	}
}

export default Header;
