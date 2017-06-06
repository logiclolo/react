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

import mainpic from './img/mainpage_1.jpg';

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
		const headline = 'How Good Is Your English'
		const sub_headline = 'English Level Test App' 
		const main_pic = {mainpic} 
		const preface = 'English Level Test, an app for you to evaluate your vocabulary and grammar Level. It’s a quick test and just take you less than three minutes. After completing the Test, not only you can recieve the result report immediately, but also can get an free online English session that match your level. '

		
		const contents = [
			{
				title: 'Background',
				desc: "iTutorGroup announced a new strategic partnership with ASUS to deliver services for user to learn English from ASUS tablets, anytime, anywhere, 24-7. What’s more, iTutorGroup also collaborate with IDEO to create a brand-new service.The English Level Test App is part of this iTutorGroup x ASUS x IDEO project, aiming to attract customer to experience iTutorGroup x ASUS’s services during Double 12 shopping festival in China.<br\> Within 3 weeks of time frame, we turned the concept into prototype, and then development finally."
			},

			{
				title: 'Insights From Field Study',
				desc: 'Through direct observation in different Electronics Stores, we discovered our target users are easy to get distracted and won’t spend too much time focusing on one product. Based on these obervations, we created a simple and quick test  which allowed all-aged users to join, and takes only few minutes to achieve.  '
			
			},

			{
				title: 'Collaboration',
				desc: 'ASUS\nIDEO\niTutorGroup'
			},

			{
				title: 'Role',
				desc: 'Interaction Design\nVisual Design\nPrototyping'
			},

			{
				title: 'Diliverables',
				desc: 'Window App (offline)',
				url: '/quiz',
			},


				
		]

		const check = (content) => {
			if ('url' in content) {
				return(
					<Link to={content.url} target='_blank'>
						Launch Site
					</Link>
				)
			}
		}

		const group = contents.map((content, index)=>{
			var desc = ''
			if ('desc' in content){
				desc = content.desc	
			}else if ('pic' in content){
				desc = content.pic	
			}

			return (
				<div>
					<div className='title'>
						<span>{content.title}</span>		
					</div>
					<div className='desc'>
						{desc.split("\n").map(i => {
						    return <div><span>{i}</span></div>;
						})}
						<span>
							{check(content)}
						</span>
					</div>
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
			</div>
			</Router>
	       )
	}
}

export default PortfolioItemPool1;
