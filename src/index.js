import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './components/SignUp.js';
import Homepage from './components/Homepage.js';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/homepage" component={Homepage} />
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
