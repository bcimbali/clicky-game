// Probably never need to touch this file
// This file is the "brains"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Bringin in App.js so that it can be attached to the div, shown below
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// This actually attaches our "App" component to our div with the ID of 'root'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
