import React from 'react';
import { connect } from 'react-redux';
import User from './User.jsx';
import Filter from './Filter.jsx';
import { changeValue } from './users.actions.js';
import { filteredUsersList, filterTextSelector } from './users.selectors.js';

const UsersList = ({ users, onChange, filterText }) => {
  const handleChange = value => {
    onChange(value);
  };

  return (
    <div>
      <Filter filterText={filterText} count={users.length} onChange={handleChange} />
      <ul className="users">
        {users.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: filteredUsersList(state),
  filterText: filterTextSelector(state),
});

const mapDispatch = {
  onChange: changeValue,
};

export default connect(mapState, mapDispatch)(UsersList);
