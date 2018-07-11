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

import mainpic from './img/w2pic_1.gif';
import w2pic_2 from './img/w2pic_2.jpg';
import w2pic_3 from './img/w2pic_3.gif';
import w2pic_4 from './img/w2pic_4.gif';
import w2pic_5 from './img/w2pic_5.gif';
import w2pic_6 from './img/w2pic_6.jpg';

class PortfolioItemPool2 extends Component {

	componentDidMount() {
		//default of scollrestoration is auto
		window.history.scollRestoration = 'manual'
		document.body.scrollTop = 0
		window.scrollTo(0, 0);
	}

	render() {
		const headline = 'Best Friend for Learing'
		const sub_headline = 'English Bot& Math Bot' 
		const main_pic = {mainpic} 
		var preface = ' \bEnglishBot\b: A bot that can teach children English conversations as a friend.\n\bMathBot\b: A bot that can organize math problems and help teenagers to practice it in a more friendly way.'

		

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
				title: 'Background',
				desc: "Foxconn is looking for partnership and  application for its robot. Therefore we proposed a few scenarios about how human being might interact with robot when it comes to learning.",

			},

			{
				title: 'User Flow',
				pic: [{w2pic_2}]
			},

			{
				title: 'EnglishBot',			 
				subtitle:'GETTING TO KNOW EACH OTHER',
				pic: [{w2pic_3}]
			
			},

			{	
				subtitle:'CHATTING WITH KIDS',
				pic: [{w2pic_4}]
			
			},

			{
				title: 'MathBot',			 
				pic: [{w2pic_6}]

			},

			{
				title: 'Role',
				desc: 'Concept Design\nIllustration\nPrototyping',
			},

			{
				title: 'Deliverables',
				desc: 'Scenarios',
				url: 'https://app.botsociety.io/s/587493be965fe52c01968175',
			},


				
		]

		preface = Characterize(preface);  

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
							<div className="external-link">
							<a href={content.url} target='_blank'>
								MathBot Prototype
							</a>
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
			<div className='previous-next'>
				<Navigation index={this.props.index} category={this.props.category} c_key={this.props.c_key}/>
			</div>
			</div>
	       )
	}
}

export default PortfolioItemPool2;
