import alt from '../alt';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.users = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateUsers: UserActions.UPDATE_USERS,
      handleFetchUsers: UserActions.FETCH_USERS,
      handleUsersFailed: UserActions.USERS_FAILED
    });
  }

  handleUpdateUsers(users) {
    this.users = users;
    this.errorMessage = null;
  }

  handleFetchUsers() {
    // reset the array while we're fetching new users so React can
    // be smart and render a spinner for us since the data is empty.
    this.users = [];
  }

  handleUsersFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(UserStore, 'UserStore');
