import React from 'react';
import Header from './Header.jsx';
import { userData, UserDataContext } from './userData.js';

class App extends React.Component {
  state = {
    name: userData.name,
    avatar: userData.avatar_url,
  };

  render() {
    console.log(this.state);
    return (
      <div className="page">
        <UserDataContext.Provider value={this.state}>
          <Header />
        </UserDataContext.Provider>
      </div>
    );
  }
}

export default App;
