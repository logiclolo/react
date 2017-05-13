import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PortfolioItemPool from './PortfolioItemPool';
import './PortfolioItemPool.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import './Sidebar.css';
import Quiz from './Quiz';
import MessageMe from './MessageMe';

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
	};
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
					component: Quiz,
					click: true,
				},
				{
					path: '/design',
					name: 'Design',
					component: MessageMe,
				},
				{
					path: '/research',
					name: 'Research',
				},
				{
					path: '/illustration',
					name: 'Illustration',
				},
			]
		},	
		{
			path: '/about',
			name: 'ABOUT',
		},
		{
			path: '/messageme',
			name: 'MESSAGE ME',
		},
	]


	const group = routes.map((route, index) => {
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

	
	const myPortfolio = routes.map((route, index) => { 
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


	return (
		<Router>
		<div className="myPortfolio">
			<div className="Sidebar">
				<div className="Author">
					<p>{author}</p>
				</div>
				<div className="list">
					<ul>
					{group}
					</ul>
				</div>
			</div>
			<div className="main-portfolio">
				{myPortfolio}
			</div>
		</div>
		</Router>
	);
}
}

export default Sidebar;
