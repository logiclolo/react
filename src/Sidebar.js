import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';

class Focus extends Component {
	constructor() {
		super();
		this.state = {
			html_class: 'unfocused',
		};
	}

	render() {
		return(
			<a 
			href="#" 
			className={this.state.html_class} 
			ref={(thisFocus) => {this.focused = thisFocus}} 
			onClick={() => this.props.onClick(this.focused)} 
			>
				{this.props.content}
			</a>
		)
	}
}

class Sidebar extends Component {

constructor() {
	super();
	this.state = {
		lastFocused: null,
		sub_lastFocused: null,
	};
}

handleClick(param) {
	const html_class_focused = 'focused';
	const html_class_unfocused = 'unfocused';

	if (ReactDOM.findDOMNode(param).parentNode.className.match('sublist') == null) {
		if (this.state.lastFocused != null) {
			this.state.lastFocused.className = html_class_unfocused;
		}
		this.state.lastFocused = param;
	}
	else {
		if (this.state.sub_lastFocused != null) {
			this.state.sub_lastFocused.className = html_class_unfocused;
		}
		this.state.sub_lastFocused = param;
	}

	param.className = html_class_focused;
}

render() {
	const author = 'WALO';
	const list = ['WORK', 'ABOUT', 'MESSAGE ME']; 
	const sublist = [['All', 'Design', 'Research', 'Illustration']]; 
	const html_class = ['list', 'sublist'];
	const html_class_1 = 'list';
	const html_class_2 = 'sublist';
	const html_class_3 = 'list_a';
	const html_class_4 = 'sublist_a';

	const group = list.map((item, index) => {
		if (index < sublist.length && sublist[index] != null)  
		{
			const subgroup = sublist[index].map((subitem, subindex) => {
				return (
					<li key={index*10+subindex} className={html_class[1]}>
						<Focus content={subitem} onClick={(focused) => this.handleClick(focused)} />
					</li>
				);
			});

			return (
				<li key={index} className={html_class[0]}>
					<Focus content={item} onClick={(focused) => this.handleClick(focused)} />
					<ul>
						{subgroup}
					</ul>
				</li>
			);
		}
		else{
			return (
				<li key={index} className={html_class[0]}>
					<Focus content={item} onClick={(focused) => this.handleClick(focused)} />
				</li>
			);
		}
	});


	return (
		<div className="Sidebar">
			<div className="Author">
				<p>{author}</p>
			</div>
			<div className="list">
				<ul>
				{group}
				</ul>
			</div>
		</div>
	);
}
}

export default Sidebar;
