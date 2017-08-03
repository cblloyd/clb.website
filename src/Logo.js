import React, { Component } from 'react';
	import logo from './logo.svg';

	class Logo extends Component {
	  render() {
	    return (
	      <div className="Logo">
					<img src={logo} className="App-logo" alt="logo" />
 				 <h2>CLB</h2>
	      </div>
	    );
	  }
	}

	export default Logo;
