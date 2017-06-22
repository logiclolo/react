import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';
import PortfolioItemPool from './PortfolioItemPool';
import './PortfolioItemPool.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';

import Header from './Header';
import logopic from './img/logo.jpg';
import Quiz from './Quiz';
import MessageMe from './MessageMe';
import About from './About';
import $ from 'jquery';
import portfolioitem1 from './PortfolioItem1.js';
import User from './components/User';

class Focus extends Component {
	constructor() {
		super();
		this.state = {
			html_class: 'unfocused',
		};
	}

	componentDidMount(node) {
		if (this.props.click) {
			this.focused.click();	
		}
	}

	render() {
		return(
			<div 
			className={this.state.html_class} 
			ref={(thisFocus) => {this.focused = thisFocus}} 
			onClick={() => this.props.onClick(this.focused)} 
			>
				<Link to={this.props.path}>
					{this.props.content}
				</Link>
			</div>
		)
	}
}

class Sidebar extends Component {

constructor() {
	super();
	this.state = {
		lastFocused: null,
		sub_lastFocused: null,
		smalldevice_sidebar_show: false,
	};
}

smalldevice_sidebar_exit() {
	this.setState({smalldevice_sidebar_show: false})
}

smalldevice_sidebar_show() {
	this.setState({smalldevice_sidebar_show: true})
}

handleClick(param) {
	const html_class_focused = 'focused';
	const html_class_unfocused = 'unfocused';

	if (ReactDOM.findDOMNode(param).parentNode.className.match('sublist') == null) {
		if (this.state.lastFocused != null) {
			this.state.lastFocused.className = html_class_unfocused;
		}
		this.state.lastFocused = param;
	}
	else {
		if (this.state.sub_lastFocused != null) {
			this.state.sub_lastFocused.className = html_class_unfocused;
		}
		this.state.sub_lastFocused = param;
	}

	param.className = html_class_focused;

	$('.focused').next().slideDown();
	$('.unfocused').next().slideUp();

	if ($('.Sidebar').hasClass('show') === true) {
		this.setState({smalldevice_sidebar_show: false})
	}

}

	componentWillReceiveProps(nextProps) {
		const locationChanged = nextProps.location !== this.props.location
		//window.location.reload()	
	}


render() {
	const author = 'WALO';
	const list = ['WORK', 'ABOUT', 'MESSAGE ME']; 
	const sublist = [['All', 'Design', 'Research', 'Illustration']]; 
	const dfocused = ['WORK', 'All'];
	const html_class = ['list', 'sublist'];

	const routes = [
		{
			path: '/',
			exact: true,
			name: 'WORK',
			component: PortfolioItemPool,
			click: true,
			sub_routes: [
				{
					path: '/all',
					name: 'All',
					component: PortfolioItemPool,
					click: true,
				},
				{
					path: '/design',
					name: 'Design',
					component: PortfolioItemPool,
				},
				{
					path: '/research',
					name: 'Research',
					component: PortfolioItemPool,
				},
				{
					path: '/illustration',
					name: 'Illustration',
					component: PortfolioItemPool,
				},
			]
		},	
		{
			path: '/about',
			name: 'ABOUT',
			exact: true,
			component: About,
		},
		{
			path: '/messageme',
			name: 'MESSAGE ME',
			exact: true,
			component: MessageMe,
			sub_routes: [
				{
					path: '/messageme/info',
					name: 'Info',
					component: User,
				
				}
			]
		},
	]


	const sidebar = routes.map((route, index) => {
		if (route.sub_routes != null) {
			const subroutes = route.sub_routes
			const subgroup = subroutes.map((subroute, subindex) => {
				return (
					<li key={index*10+subindex} className={html_class[1]}>
						<Focus content={subroute.name} path={subroute.path} click={subroute.click} onClick={(focused) => this.handleClick(focused)} />
					</li>
				);
			});

			return (
				<li key={index} className={html_class[0]}>
					<Focus content={route.name} path={route.path} click={route.click} onClick={(focused) => this.handleClick(focused)} />
					<ul>
						{subgroup}
					</ul>
				</li>
			);
		}
		else {
			return (
				<li key={index} className={html_class[0]}>
					<Focus content={route.name} path={route.path} click={route.click} onClick={(focused) => this.handleClick(focused)} />
				</li>
			);
		
		}
	});

	
	const sidebar_routes = routes.map((route, index) => { 
		if (route.sub_routes != null) {
			
			const subgroup = route.sub_routes.map((subroute, index) => {
				return (
					<Route	
						key={index}
						path={subroute.path}
						exact={subroute.exact}
						component={subroute.component}
					/>
				);
			});

			return (
				<div>
					<Route	
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.component}
					/>
					{subgroup}
				</div>
			);
		}
		else {
			return (
				<Route	
					key={index}
					path={route.path}
					exact={route.exact}
					component={route.component}
				/>
			);
		}
	});


	var sidebar_class = (this.state.smalldevice_sidebar_show)? 'Sidebar show': 'Sidebar'
	var main_portfolio_class= (this.state.smalldevice_sidebar_show)? 'main-portfolio blurin': 'main-portfolio'
	var header_class = (this.state.smalldevice_sidebar_show)? 'header blurin': 'header'
	var menu_class = (this.state.smalldevice_sidebar_show)? 'menu exit': 'menu'

	/*****
	 
	 Following will render three main areas
	 1. Sidebar
	 2. header (only in Pad of mobile)
	 3. main portfolio

	*****/

	return (
		<div className="myPortfolio">
			<div className={sidebar_class}>
				<div className='menu exit'>
				<a className='menu-bar' onClick={()=>this.smalldevice_sidebar_exit()}>		
					<span className='ham'>
					</span>
				</a>
				</div>
				<div className="Author">
					<img src={logopic}/>
				</div>
				<div className="list">
					<ul>
					{sidebar}
					</ul>
				</div>
			</div>
			<div className={'header-area'}>
				<Header headerClass={header_class} menuClass={menu_class} onClick={()=>this.smalldevice_sidebar_show()}/>
			</div>
			<div className={main_portfolio_class}>
				{sidebar_routes}
			</div>
		</div>
	);
}
}

export default Sidebar;
