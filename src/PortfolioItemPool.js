import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PortfolioItemPool.css';
import Header from './Header';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link
} from 'react-router-dom';

import portfolioitem1 from './PortfolioItem1.js';

class PortfolioItem extends Component {

	render() {
		const html_class = 'portfolio-item ';
		const html_class_hover = 'hover-state';
		const html_class_info = 'info';
		const html_class_title = 'title';
		const html_class_subtitle = 'subtitle';
		const name = html_class + this.props.post
		return(	
			//<Link to={this.props.path} target='_blank'>
			<Link to={this.props.path}>
				<div className={name}>		
					<div className={html_class_hover}>
						<div className={html_class_info}>
							<div className={html_class_title}>
								<h2>{this.props.title}</h2>
							</div>
							<div className={html_class_subtitle}>
								<h3>{this.props.subtitle}</h3>
							</div>
						</div>
					</div>
				</div>
			</Link>
		)
	}
}

{/*
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

*/}

class Container extends Component {
	render() {
		return(	
			<div className='container'>		
				<PortfolioItem post={'post1'} path={'/all/item1'} title={'How good is your English?'} subtitle={'UX/UI Design'} />
				<PortfolioItem post={'post2'} path={'/all/item2'} title={'How good is your English?'} subtitle={'UX/UI Design'} />
				<PortfolioItem post={'post3'} path={'/all/item3'} title={'How good is your English?'} subtitle={'UX/UI Design'} />
				<PortfolioItem post={'post4'} path={'/all/item4'} title={'How good is your English?'} subtitle={'UX/UI Design'} />
				<PortfolioItem post={'post5'} path={'/all/item5'} title={'How good is your English?'} subtitle={'UX/UI Design'} />
			</div>
		)
	}
}

class Wrapper extends Component {
	render() {
		return(	
			<div className='wrapper'>
				<Header/>
				<Container/>
			</div>
		)
	}
}

class Footer extends Component {
	render() {
		return(	
			<div className='footer'/>		
		)
	}
}
class PortfolioItemPool extends Component {

	componentWillReceiveProps(nextProps) {
		const locationChanged = nextProps.location !== this.props.location
		window.location.reload()	
	}

	render() {

		const quiz = () => { 
				window.location.reload()
				return(<Redirect to='/quiz' />)
		}	

		const portfolioPool = () => {

			return (
				<div className='portfolioitem-pool'>
					<Wrapper/>
					<Footer/>
				</div>
			)
		}

		return(
			<Router>
			<Switch>
				<Route exact path='/' component={portfolioPool} />
				<Route exact path='/all' component={portfolioPool} />
				<Route exact path='/all/item1' component={portfolioitem1} />
				<Route path='/quiz' component={quiz} />
			</Switch>
			</Router>
		) 	
	}
}

export default PortfolioItemPool;
