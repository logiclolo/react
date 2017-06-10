import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import spinner from '../spinner.gif';
import '../users.css';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = UserStore.getState();
		this.onChange = this.onChange.bind(this);
	}


	componentDidMount() {
		UserStore.listen(this.onChange);
		UserActions.fetchUsers();

	}

	componentDddidUpdate() {
	}

	componentWillUnmount() {
		UserStore.unlisten(this.onChange);
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

		if (!this.state.users.length) {
			return (
				<div>
				<img width='20px' src={spinner}/>
				</div>
			)
		}

		return (
			<div className='users'>
			<h2>User Information</h2>
			<table>
				<tr>
					<th>Name</th>
					<th>E-Mail</th>
					<th>Register Time</th>
				</tr>
				{this.state.users.map((user) => {
				  return (
					<tr>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.updated}</td>
					</tr>
				  );
				})}
			</table>
			</div>
		);
	}
}

module.exports = Users;
