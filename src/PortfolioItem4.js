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

import mainpic from './img/w4pic_1.gif';
import w4pic_2 from './img/w4pic_2.svg';
import w4pic_3 from './img/w4pic_3.svg';
import w4pic_4 from './img/w4pic_4.svg';
import w4pic_5 from './img/w4pic_5.svg';
import w4pic_6 from './img/w4pic_6.png';
import w4pic_7 from './img/w4pic_7.png';
import w4pic_8 from './img/w4pic_8.svg';
import w4pic_9 from './img/w4pic_9.svg';


class PortfolioItemPool4 extends Component {

	componentDidMount() {
		//default of scollrestoration is auto
		window.history.scollRestoration = 'manual'
		document.body.scrollTop = 0
		window.scrollTo(0, 0);
	}

	render() {
		const headline = 'Keep Track Of Kid’s Learning'
		const sub_headline = 'Parents Zone' 
		const main_pic = {mainpic} 
		var preface = "\bParents Zone\b, an app for parents to keep track of kid's learning progress. Not only parents can receive kid's schedule and teacher's feedback on time, but also can get access to audit the sessions."
		

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
				desc: "iTutorGroup has been providing services for teenagers to learn English online for years. However, we barely know the parents, who might be the crucial decision maker in purchasing services for kids. The goal of this project is to understand parent’s perspectives toward kid’s online learning and providing services that match their needs.",

			},

			{
				title: 'Persona',
				desc: "We conducted research and interviewed with parents, trying to gather their perspectives and attitudes.",
				pic: [{w4pic_2},{w4pic_3},{w4pic_4},{w4pic_5}]
			},

			{
				title: 'Visual Design',
				desc: 'We visualized kid’s schedule and developed audit function, letting parents to keep track of kid’s learning progress. These needs were discovered during interview, most of the parents were desperate to know how their kids behave during sessions.',
	
			},

			{	
				subtitle:'COMPLETE vs INCOMPLETE',
				pic: [{w4pic_6}]
			
			},

			{	
				subtitle:'BEFORE & DURING & AFTER SESSION',
				pic: [{w4pic_7}]
			
			},

			{
				title: 'Usability Testing',
				desc: "We utilized both qualitative and quantitative methods during the testing, trying to gather as much as feedbacks from users. Following are two quantitative outcomes.",			 

			},

			{	
				subtitle:'USER SATISFACTION',
				pic: [{w4pic_8}]
			
			},

			{	
				subtitle:'SUCCESSFUL TASK COMPLETION',
				pic: [{w4pic_9}]
			
			},
			

			{
				title: 'Role',
				desc: 'UX Research\nInteraction Design\nVisual Design\nPrototyping',
			},

			{
				title: 'Deliverables',
				desc: 'Persona\nUsability Report\nPrototype',
			
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
							<Link to={content.url} target='_blank'>
								MathBot Prototype
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

export default PortfolioItemPool4;
