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

import mainpic from './img/w3pic_1.jpg';
import w3pic_2 from './img/w3pic_2.jpg';
import w3pic_3 from './img/w3pic_3.jpg';
import w3pic_4 from './img/w3pic_4.jpg';
import w3pic_5 from './img/w3pic_5.jpg';
import w3pic_6 from './img/w3pic_6.jpg';
import w3pic_7 from './img/w3pic_7.png';
import w3pic_8 from './img/w3pic_8.png';
import w3pic_9 from './img/w3pic_9.png';
import w3pic_10 from './img/w3pic_10.png';
import w3pic_11 from './img/w3pic_11.png';
import w3pic_12 from './img/w3pic_12.png';



class PortfolioItemPool1 extends Component {

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
		const headline = 'Rebiult Service For Both Internal And External System'
		const sub_headline = 'Visitor Page& Consultant Portal& Recruiting Center' 
		const main_pic = {mainpic} 
		const preface = 'Visitor Page, Consultant Portal, and Recruiting Center compose the whole consultant& recruitor service. Visitor Page assists applicants to apply for the job; Consultant Portal suppots consultants to teach online courses; Recryiting Center helps recrutors to enlist consultants.'
		const contents = [
			{
				title: 'Background',
				desc: "iTutorGroup has been recruiting consultants to teach Englsih online for decades. Both the recruiting and consultant system are out of function and inefficient: Visitor Page suffers from low conversion rate; Consultant Portal lacks of user stickiness; Recruiter Center is full of routine processes.To solve this problems, We not only redesigned the interface of the systems, but also recreated a new service logic for the whole service.",
			},

			{
				title: 'Brainstorming',			 
				desc: "We interacted with our users during the brainstorming meeting,and tried to capturing their needs and pain points.",
				pic: [{w3pic_2}]
			
			},
			
			{
				title: 'Blueprint',
				desc: 'We created the blueprint of current systems, discovering a few problems, and then renovated it into a better version.',
				pic: [{w3pic_3},{w3pic_4}]

			},
			
			{
				title: 'User Journey',
				desc: "Although there are conflicts between user needs and company policies, we still found a way out. The user journey we proposed not only increased the efficiency of the whole consultant application process, but also reduced many unnecessary works for the recruiters.",			 
				pic: [{w3pic_5},{w3pic_6}]

			},
			
			{
				title: 'UI Flow',
				desc: "We connected the flows between both internal and external system, allowing users to run through the whole service without any obstacle.",			 
				pic: [{w3pic_7}]

			},

			{
				title: 'Visual Design',
							 
				pic: [{w3pic_8},{w3pic_9},{w3pic_10},{w3pic_11},{w3pic_12}]

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
				desc =	(
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

export default PortfolioItemPool1;
