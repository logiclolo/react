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
import Navigation from './Navigation';
import Characterize from './characterize';

import mainpic from './img/about_1.jpeg';



class About extends Component {

	componentDidMount() {
		//default of scollrestoration is auto
		window.history.scollRestoration = 'manual'
		document.body.scrollTop = 0
		window.scrollTo(0, 0);
	}

	render() {
		const headline = 'About Me'
		const sub_headline = '' 
		const main_pic = {mainpic} 
		var preface = 'I’m a Taiwanese UX designer with diverse backgrounds and multiple interests. I studied finance in college, and then got a master’s degree in both HCI and industrial engineering. Now I work as a user experience designer focusing on interaction design and user research.'

		

		/********
		 contents has the following keys:
		 1. title
		 2. desc
		 3. subtitle
		 4. subdesc 
		 5. pic
		 ********/
		var contents = [
			
			{
				subtitle: 'PROFESSION',			 
				
			
			},
			
			{
				subtitle: 'SOCIAL NETWORK',			 
				

			},

				
		]


		preface = Characterize(preface);  

		const check = (content) => {
			if ('url' in content) {
				return(
					<Link to={content.url} target='_blank'>
						Launch Site
					</Link>
				)
			}
		}

		const display = contents.map((content, index) => {
				return Object.keys(content).map(function(key){

					if (key === 'pic') {
						var pic;
						pic = content.pic.map(p=>{
							return <div className='pic'><img src={p[Object.keys(p)[0]]}/></div>
						})

						return pic
					}
					else if (key === 'url'){
						return(
							<div className="desc">
							<Link to={content.url} target='_blank'>
								Launch Site
							</Link>
							</div>
						)
					}
					else {
						return (
							<div className={key}>
								{Characterize(content[key])}
							</div>
								
						)
					}
				})
		})

		return (
			<Router>
			<div>
			<div className='portfolio-description'>
				<div className='headline'>
					<span>{headline}</span>
				</div>
				<div className='sub-headline'>
					<span>{sub_headline}</span>
				</div>
				<div className='pic'>
					<img src={mainpic} />
				</div>
				<div className='preface'>
					<span>{preface}</span>
				</div>
				<div className='content'>
					{display}			
				</div>
			</div>
			</div>
			</Router>
	       )
	}
}

export default About;
