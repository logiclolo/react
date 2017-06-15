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

	home() {
		location.reload()	
	}
	render() {
		const logo = 'WALO' 
		return(	
			<div className='menu-wrapper'>
				<a href='/' className='logo' onClick={()=>this.home()}>
					<img src={logopic}/>
				</a>
				<div className={this.props.menuClass}>
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
			<div className={this.props.headerClass}>		
				<MenuBar menuClass={this.props.menuClass} onClick={()=>this.props.onClick()} />
			</div>
		)
	}
}

export default Header;
