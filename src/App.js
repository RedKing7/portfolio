import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://avatars0.githubusercontent.com/u/30734199?v=4&s=460' className="portrait" alt="me" />
        </header>
        <Profile />
      </div>
    );
  }
}

export default App;
