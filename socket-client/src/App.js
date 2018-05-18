import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import SidePane from './sidepane.js';
import Content from './content.js';
class App extends Component {
  render() {
    return (
      <div id="frame">
        <SidePane />
        <Content />
      </div>
    );
  }
}

export default App;
