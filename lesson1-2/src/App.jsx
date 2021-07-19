import React from 'react';
import Header from './Header.jsx';
import { userData, UserDataContext } from './userData.js';

class App extends React.Component {
  state = {
    userData,
  };

  render() {
    return (
      <div className="page">
        <UserDataContext.Provider value={this.state.userData}>
          <Header />
        </UserDataContext.Provider>
      </div>
    );
  }
}

export default App;
