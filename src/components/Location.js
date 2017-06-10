import React, { Component } from 'react';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';

import spinner from '../spinner.gif';

class Locations extends Component {
	constructor(props) {
		super(props);
		this.state = LocationStore.getState();
		this.onChange = this.onChange.bind(this);
	}


	componentDidMount() {
		LocationStore.listen(this.onChange);
		LocationActions.fetchLocations();

	}

	componentDddidUpdate() {

		setTimeout(

	function(){
	var mockData = [
	  { id: 0, name: 'Abu Dhabi' },
	  { id: 1, name: 'Berlin' },
	  { id: 2, name: 'Bogota' },
	  { id: 3, name: 'Buenos Aires' },
	  { id: 4, name: 'Cairo' },
	  { id: 5, name: 'Chicago' },
	  { id: 6, name: 'Lima' },
	  { id: 7, name: 'London' },
	  { id: 8, name: 'Miami' },
	];
		LocationActions.updateLocations(mockData);	
	}, 5000
		)
	}

	componentWillUnmount() {
		LocationStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}


	render() { 

		if (this.state.errorMessage) {
			return (
				<div>Something is wrong</div>
			);
		}

		if (!this.state.locations.length) {
			return (
				<div>
				<img width='20px' src={spinner}/>
				</div>
			)
		}

		return (
			<ul>
				{this.state.locations.map((location) => {
				  return (
				    <li>{location.name}</li>
				  );
				})}
			</ul>
		);
	}
}

module.exports = Locations;
