import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PortfolioItemPool.css';

class PortfolioItem extends Component {

	render() {
		const html_class = 'portfolio-item ';
		const html_class_hover = 'hover-state';
		const html_class_info = 'info';
		const html_class_title = 'title';
		const html_class_subtitle = 'subtitle';
		const name = html_class + this.props.post
		return(	
			<a href={''}>
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
			</a>
		)
	}
}

class Header extends Component {
	render() {
		return(	
			<div className='header'/>		
		)
	}
}

class Container extends Component {
	render() {
		return(	
			<div className='container'>		
				<PortfolioItem post={'post1'} title={'How good is your English?'} subtitle={'UX/UI Design'} />
				<PortfolioItem post={'post2'} />
				<PortfolioItem post={'post3'} />
				<PortfolioItem post={'post4'} />
			</div>
		)
	}
}

class Wrapper extends Component {
	render() {
		return(	
			<div className='wrapper'>
				<Header/>
				<Container/>
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
	render() {
		return(
			<div className='main-portfolio'>		
				<Wrapper/>
				<Footer/>
			</div>
		) 	
	}
}

export default PortfolioItemPool;
