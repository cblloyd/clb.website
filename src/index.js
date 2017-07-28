import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceworker from './registerServiceworker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceworker();
