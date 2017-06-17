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

import Portfolioitem1 from './PortfolioItem1';
import Portfolioitem2 from './PortfolioItem2';
import Portfolioitem3 from './PortfolioItem3';
import Quiz from './Quiz';

class PortfolioItem extends Component {

	render() {
		const html_class = 'portfolio-item ';
		const html_class_hover = 'hover-state';
		const html_class_info = 'info';
		const html_class_title = 'title';
		const html_class_subtitle = 'subtitle';
		const name = html_class + this.props.post + ' ' + this.props.item;

		/****
		 This modification is for mobile/pad hover effect

		 if desktop browser
		 path of Link should be normal url

		 if pad/mobile
		 if the Link is not the last one being clicked, the path of Link should be null in order to allow hover effect
		 ****/

		var path;
		if (window.innerWidth > 768){
			path = this.props.path	
		}
		else {
			if (this.props.lastClick !== name){
				path=''
			}
			else {
				path = this.props.path
			}
		}

		return(	
			<Link to={path} ref={(thisClick) => {this.click = thisClick}} onClick={()=>this.props.onClick(this.click)} >
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

	constructor() {
		super();
		this.state = {
			lastClick: null,
		};
	}

	onClick(click) {
		var cur = ReactDOM.findDOMNode(click).childNodes[0].className
		if (this.state.lastClick !== cur){
			this.setState({lastClick: cur})	
		}
	}

	render() {
		
		const key = (location.pathname.split('/')[1] === '')? 'all':location.pathname.split('/')[1] 
		const category = this.props.category[key]

		const content = category.map((cat, index)=>{
				var i = cat.split('item')[1]
				i = parseInt(i)
				return(
				<PortfolioItem post={'post'+ (index+1) } 
						lastClick={this.state.lastClick}
						onClick={(click)=>this.onClick(click)}
						item={cat}
						path={'/'+key+'/'+cat} 
						title={this.props.title.title[i-1]} 
						subtitle={this.props.title.subtitle[i-1]} 
				/>
				)	
			})
				
		return(	
			<div className='container'>		
			{content}
			</div>
		)
	}
}

class Wrapper extends Component {
	render() {
		return(	
			<div className='wrapper'>
				{/*
				<Header/>
				*/}
				<Container category={this.props.category} title={this.props.title}/>
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
		if (nextProps.location.pathname !== this.props.location.pathname)
			location.reload()	
	}

	componentDidMount() {
		//default of scollrestoration is auto
		window.history.scollRestoration = 'manual'
		document.body.scrollTop = 0
		window.scrollTo(0, 0);
	}

	render() {
		const category = {
			all: ['item1', 'item2', 'item3', 'item4', 'item5'],
			design: ['item1', 'item2', 'item3', 'item4'],
			research: ['item1', 'item3', 'item4'],
			illustration: ['item5'],
		} 

		const matching = {
			item1: Portfolioitem1,
			item2: Portfolioitem2,
			item3: Portfolioitem3,
			item4: Portfolioitem1,
			item5: Portfolioitem1,
		}

		const title = {
			title:['How Good Is Your English?',
				'Best Friend For Learing',
				'Rebiult Service For Both External and Internal Systems',
				'Keep Track Of Kid\'s Learning?',
				'Creatures in the Fantasy?'],	

			subtitle:['UI/UX Design','Bot Design','WEB Design  / UX Research','App Design / UX Research','Art'],
		}

		const quiz = () => { 
				//window.location.reload()
				return(<Redirect to='/quiz' />)
		}	

		const portfolioPool = () => {

			return (
				<div className='portfolioitem-pool'>
					<Wrapper category={category} title={title} />
					<Footer/>
				</div>
			)
		}

		const WrapperRoute = (Component, path, category, index ) => { 
			const a=1;	
			return(
				<Route exact path={path} render={()=> (<Component path={path} category={category} index={index}/>)} />
			)
		}

		const portfolio_routes = Object.keys(category).map(function(key){
						const route = category[key].map((cat, index)=>{
							const path = '/'+key+'/'+cat
							const Obj = matching[cat]
							return(
								<Route exact path={path} render={() => (<Obj path={path} category={category} c_key={key} index={index}/>)} />
							)
						});
						return route;
					})
					

		return(
			<div>
			<Router>
			<Switch>
				<Route exact path='/' component={portfolioPool} />
				<Route exact path='/all' component={portfolioPool} />
				<Route exact path='/design' component={portfolioPool} />
				<Route exact path='/research' component={portfolioPool} />
				<Route exact path='/illustration' component={portfolioPool} />
				<Route path='/quiz' component={quiz} />
				{portfolio_routes}
			</Switch>
			</Router>
			</div>
		) 	
	}
}

export default PortfolioItemPool;
