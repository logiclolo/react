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

import mainpic from './img/w3pic_1.gif';
import w3pic_2 from './img/w3pic_2.jpg';
import w3pic_3 from './img/w3pic_3.jpg';
import w3pic_4 from './img/w3pic_4.jpg';
import w3pic_5 from './img/w3pic_5.jpg';
import w3pic_6 from './img/w3pic_6.jpg';
import w3pic_7 from './img/w3pic_7.png';
import w3pic_8 from './img/w3pic_8.jpg';
import w3pic_9 from './img/w3pic_9.jpg';
import w3pic_10 from './img/w3pic_10.png';
import w3pic_11 from './img/w3pic_11.png';
import w3pic_12 from './img/w3pic_12.png';
import w3pic_13 from './img/w3pic_13.png';
import w3pic_14 from './img/w3pic_14.png';

class PortfolioItemPool3 extends Component {

	componentDidMount() {
		//default of scollrestoration is auto
		window.history.scollRestoration = 'manual'
		document.body.scrollTop = 0
		window.scrollTo(0, 0);
	}

	render() {
		const headline = 'Redesign Both Internal Systems And External Services'
		const sub_headline = 'Visitor Page& Consultant Portal& Recruiting Center' 
		const main_pic = {mainpic} 
		var preface = '\bVisitor Page\b, \bConsultant Portal\b, and \bRecruiting Center\b compose the whole consultant& recruitor service. Visitor Page assists applicants to apply for the job; Consultant Portal suppots consultants to teach online courses; Recryiting Center helps recrutors to enlist consultants.'
		

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
				desc: "iTutorGroup has been recruiting consultants to teach Englsih online for decades. Both the recruiting and consultant system are out of function and inefficient: Visitor Page suffers from low conversion rate; Consultant Portal lacks of user stickiness; Recruiter Center is full of routine processes.To solve this problems, We not only redesigned the interface of the systems, but also recreated a new service logic for the whole service.",

			},

			{
				title: 'Brainstorming',
				desc: "We interacted with our users during the brainstorming meeting,and tried to capture their needs and pain points.",
				pic: [{w3pic_2}]
			},

			{
				title: 'Blueprint',
				desc: 'We created the blueprint of current systems, discovering a few problems, and then renovated it into a better version.',
	
			},

			{	
				subtitle:'CURRENT SYSTEMS',
				pic: [{w3pic_3}]
			
			},

			{	
				subtitle:'RENOVATED BLUEPRINT',
				pic: [{w3pic_4}]
			
			},

			{
				title: 'User Journey',
				desc: "Although there are conflicts between user needs and company policies, we still found a way out. The user journey we proposed not only increased the efficiency of the whole consultant application process, but also reduced many unnecessary works for the recruiters.",			 

			},

			{	
				subtitle:'OLD VERSION WITH MANY PAINPOINTS',
				pic: [{w3pic_5}]
			
			},

			{	
				subtitle:'ADVANCED VERSION',
				pic: [{w3pic_6}]
			
			},

			{
				title: 'UI Flow',
				desc: "We connected the flows between both internal and external system, allowing users to run through the whole service without any obstacle.",			 
				pic: [{w3pic_7}]

			},

			{
				title: 'Switch Seamlessly Between Devices',
				desc: "The new Visitor Page we designed is not only more powerful than the older version, but also allow applicants to complete the whole application process using any devices.",			 

			},

			{	
				subtitle:'PHONE',
				pic: [{w3pic_8}]
			
			},

			{	
				subtitle:'WEB',
				pic: [{w3pic_9}]
			
			},

			{	
				title:'Visualize and Prioritize Information',
				subtitle:'DASHBOARD',
				pic: [{w3pic_10}]
			
			},

			{	
				subtitle:'SESSION SCHEDULING',
				subdesc:'Day vs Week',
				pic: [{w3pic_11},{w3pic_12}]
			
			},
			
			{	
				title:'Get Access To Multiple Resources Easily',
			
			},

			{	
				subtitle:'TRAINING PORTAL',
				pic: [{w3pic_13}]
			
			},

			{	
				subtitle:'MESSAGE SYSTEM',
				pic: [{w3pic_14}]
			
			},

			{
				title: 'Role',
				desc: 'UX Research\nInteraction Design\nPrototyping',
			},

			{
				title: 'Deliverables',
				desc: 'User Journey Map\nBlueprint\nPrototype',
			
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

export default PortfolioItemPool3;
