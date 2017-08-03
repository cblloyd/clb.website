import React, { Component } from 'react';
import './App.css';
import Body from './Body';
import Nav from './Nav';
import Logo from './Logo';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
					<Nav />
					<Logo />
					<Clock />
        </div>
        <Body />
      </div>
    );
  }
}

export default App;
