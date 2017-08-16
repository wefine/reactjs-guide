import React, { Component } from 'react';
import Terminal from './Terminal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Terminal socketURL="ws://localhost:8080/api/v1/namespaces/default/pods/pod-example/exec?stdout=1&stdin=1&stderr=1&tty=1&container=hello-world&command=bash">

          </Terminal>
      </div>
    );
  }
}

export default App;
