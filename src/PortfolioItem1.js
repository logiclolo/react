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

import mainpic from './img/w1pic_1.gif';
import w1pic_2 from './img/w1pic_2.jpg';
import w1pic_3 from './img/w1pic_3.jpg';
import w1pic_4 from './img/w1pic_4.jpg';
import w1pic_5 from './img/w1pic_5.jpg';
import w1pic_6 from './img/w1pic_6.jpg';
import w1pic_7 from './img/w1pic_7.jpg';

class PortfolioItemPool1 extends Component {

	componentDidMount() {
		//default of scollrestoration is auto
		window.history.scollRestoration = 'manual'
		document.body.scrollTop = 0
		window.scrollTo(0, 0);
	}

	render() {
		const headline = 'How Good Is Your English?'
		const sub_headline = 'English Level Test App' 
		const main_pic = {mainpic} 
		var preface = '\bEnglish Level Test\b, an app for you to evaluate your vocabulary and grammar Level. It’s a quick test and just take you less than three minutes. After completing the Test, not only you can recieve the result report immediately, but also can get an free online English session that match your level. '

		

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
				desc: "iTutorGroup, a leading online education platform, announced a strategic partnership with ASUS to deliver a service for user to learn English using ASUS tablets, anytime, anywhere, 24-7. What’s more, iTutorGroup also collaborate with IDEO to create a brand-new service.The English Level Test App is part of this iTutorGroup x ASUS x IDEO project, aiming to attract customer to experience iTutorGroup x ASUS’s services during Double 12 shopping festival in China.\n\n Within two weeks of time frame, we turned the concept into prototype, and then development finally.",
			},

			{
				title: 'Insights From Field Study',
				desc: 'Through direct observation in different Electronics Stores, we discovered our target users are easy to get distracted and won’t spend too much time focusing on one product. Based on these observations, we created a simple and quick test  which allowed all-aged users to join, and takes only few minutes to achieve.  ',
			
			},

			{
				title: 'UI Flow',			 
				pic: [{w1pic_2}]
			
			},
			
			{
				title: 'Visual Design',			 
				pic: [{w1pic_4}, {w1pic_5}, {w1pic_6}, {w1pic_7}]

			},

			{
				title: 'Collaboration',
				desc: 'ASUS\nIDEO\niTutorGroup'
			},

			{
				title: 'Role',
				desc: 'Interaction Design\nVisual Design\nPrototyping',
			},

			{
				title: 'Deliverables',
				desc: 'Windows App (Offline)',
				url: '/quiz.html',
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
			<div className='previous-next'>
				<Navigation index={this.props.index} category={this.props.category} c_key={this.props.c_key}/>
			</div>
			</div>
			</Router>
	       )
	}
}

export default PortfolioItemPool1;
