import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link } from 'react-router'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// console.log(createStore, 'createStore')
// console.log(Provider, 'Provider')
// console.log(Router, 'Router')
// console.log(Route, 'Route')
// console.log(Link, 'Link')