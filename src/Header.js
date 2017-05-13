import React, { Component } from 'react';
import './PortfolioItemPool.css';

class MenuBar extends Component {
	render() {
		const logo = 'WALO' 
		return(	
			<div className='menu-wrapper'>
				<div className='logo'>
					{logo}
				</div>
				<div className='menu'>
					<a className='menu-bar' href='#'>		
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
				<MenuBar />
			</div>
		)
	}
}

export default Header;
