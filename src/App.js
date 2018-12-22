import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Meetup</h1>
          <img src={logo} className="App-logo" alt="logo" />
            We only use facebook for logging in, we never steal data or post on your behalf
            <Facebook/>
        </header>
      </div>
    );
  }
}

export default App;
