import React from 'react';
import { ThemeContext } from './themes-context.js';

class ThemedButton extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        style={{ color: this.context.fontColor, backgroundColor: this.context.background }}
        className="btn"
      ></button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
