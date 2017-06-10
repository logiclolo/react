import alt from '../alt';
import UserSource from '../sources/UserSource';
import $ from 'jquery';

class UserActions {
	updateUsers(users) {
		return users;
	}

	fetchUsers() {
	  return (dispatch) => {
	    // we dispatch an event here so we can have "loading" state.
		dispatch();
		$.ajax({
			type: 'get',
			url: '/fetchusers',
			})
			.done((users) => {
				this.updateUsers(users);
			})
			.fail((err) => {
				this.usersFailed(err);
		});
		/*
		UserSource.fetch()
		.then((users) => {
			// we can access other actions within our action through `this.actions`
			this.updateUsers(users);
		})
		.catch((errorMessage) => {
			this.usersFailed(errorMessage);
		});
		*/
	    }
	}

	usersFailed(errorMessage) {
	  return errorMessage;
	}
}

module.exports = alt.createActions(UserActions);
