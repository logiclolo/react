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

import mainpic from './img/w2pic_1.gif';
import w2pic_2 from './img/w2pic_2.gif';
import w2pic_3 from './img/w2pic_3.jpg';


class PortfolioItemPool2 extends Component {

	constructor() {
		super();
		this.state = {
			reload: true,
		};
	}

	componentDidMount() {
		this.setState({
			reload: false,
		},
			function() {
			}	
		);
	}

	render() {
		const headline = 'Best Friend for Learing'
		const sub_headline = 'English Bot& Math Bot' 
		const main_pic = {mainpic} 
		const preface = 'EnglishBot: A Bot that can teach children English conversations as a friend.\nMathBot: A bot that can organize math problems and help teenagers to practice it in a more friendly way.'
		const contents = [
			{
				title: 'Background',
				desc: "Foxccon is looking for partnership and  application for its robot. Therefore we proposed a few scenarios about how human being might interact with robot when it comes to learning."
			},

			{
				title: 'EnglishBot',			 
				pic: [{w2pic_2}]
			
			},
			
			{
				title: 'MathBot',			 
				pic: [{w2pic_3}]

			},

			{
				title: 'Role',
				desc: 'Concept Design\nIllustration\nPrototyping'
			},

			{
				title: 'Deliverables',
				desc: 'Scenarios',
				url: 'https://app.botsociety.io/s/587493be965fe52c01968175',
			},


				
		]
		const check = (content) => {
			if ('url' in content) {
				return(
					<Link to={content.url} target='_blank'>
						Prototype
					</Link>
				)
			}
		}

		const group = contents.map((content, index)=>{
			var desc; 
			var subtitle;
			var subdesc;
			var pic; 

			if ('desc' in content){
				desc = (
						<div className='desc'>
							{content.desc.split("\n").map(i => {
							    return <div><span>{i}</span></div>;
							})}
							<span>
								{check(content)}
							</span>
						</div>
				)
			}


			if ('subtitle' in content){
				subtitle = (
					<div className='subtitle'>
						<span>{content.subtitle}</span>		
					</div>
			       )
			}

			if ('subdesc' in content){
				subdesc = (
						<div className='subdesc'>
							{content.subdesc.split("\n").map(i => {
							    return <div><span>{i}</span></div>;
							})}
							<span>
								{check(content)}
							</span>
						</div>
				)
			}
			
			if ('pic' in content){
				pic = content.pic.map(p=>{
					return <div className='pic'><img src={p[Object.keys(p)[0]]}/></div>
				})
			}

			return (
				<div>
					<div className='title'>
						<span>{content.title}</span>		
					</div>
					{desc}
					{subtitle}
					{subdesc}
					{pic}
				</div>
			)
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
					{group}			
				</div>
			</div>
			<div className='previous-next'>
				<Navigation index={this.props.index} category={this.props.category} c_key={this.props.c_key}/>
			</div>
			</div>
			</Router>
	       )
	}
}

export default PortfolioItemPool2;
