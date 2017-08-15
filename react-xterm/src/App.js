import React, { Component } from 'react';
import Terminal from './Terminal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Terminal socketURL="ws://localhost:3000/terminals/">

          </Terminal>
      </div>
    );
  }
}

export default App;
