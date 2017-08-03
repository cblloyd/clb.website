import React, { Component } from 'react';
import Websites from './Websites';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <h1>Glad to see you</h1>
				<div className="inner-body">
					<Websites />
				</div>
      </div>
    );
  }
}

export default Body;
