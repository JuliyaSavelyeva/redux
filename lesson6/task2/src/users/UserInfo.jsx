import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isFetchingSelector, userDataRecievedSelector } from './users.selectors.js';
import Spinner from './Spinner.jsx';

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userData: PropTypes.shape(),
  isFetching: PropTypes.bool.isRequired,
};

UserInfo.defaultValue = {
  userData: null,
};

const mapState = state => ({
  isFetching: isFetchingSelector(state),
  userData: userDataRecievedSelector(state),
});

export default connect(mapState)(UserInfo);
