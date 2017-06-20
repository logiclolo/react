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

import mainpic from './img/w6pic_1.gif';
import w6pic_2 from './img/w6pic_2.png';
import w6pic_3 from './img/w6pic_3.png';
import w6pic_4 from './img/w6pic_4.png';
import w6pic_5 from './img/w6pic_5.png';
import w6pic_6 from './img/w6pic_6.png';


class PortfolioItemPool6 extends Component {

	componentDidMount() {
		//default of scollrestoration is auto
		window.history.scollRestoration = 'manual'
		document.body.scrollTop = 0
		window.scrollTo(0, 0);
	}

	render() {
		const headline = 'Creatures in The Forest'
		const sub_headline = 'Illustration' 
		const main_pic = {mainpic} 
		var preface = ''

		

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
				subtitle: 'BEAR',			 
				pic: [{w6pic_2}]
			
			},
			
			{
				subtitle: 'BONNY',			 
				pic: [{w6pic_3}]

			},

			{
				subtitle: 'CRAB',
				pic: [{w6pic_4}]
			},

			{
				subtitle: 'ROOSTER',			 
				pic: [{w6pic_5}]

			},

			{
				subtitle: 'MOUSE',
				pic: [{w6pic_6}]
			},

			{
				title: 'Role',
				desc: 'Illustration\nMotion Graphic',
			},

			{
				title: 'Deliverables',
				desc: 'Stickers',
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

export default PortfolioItemPool6;
