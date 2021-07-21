import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../users.actions.js';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  goNext = () => {
    this.props.goNext();
  };

  goPrev = () => {
    this.props.goPrev();
  };

  render() {
    const { users, currentPage } = this.props;

    const usersPerPage = 3;

    const [...copyUsers] = users;

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToDisplay = copyUsers.sort((a, b) => a.age - b.age).slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={usersPerPage}
        />
        <ul className="users">
          {usersToDisplay.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
});

const mapDispatch = {
  goPrev: usersActions.goPrev,
  goNext: usersActions.goNext,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
