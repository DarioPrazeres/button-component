import React, { Component } from 'react';
import Button from './components/Button'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hello World
        </h1>
        <Button text='Default' color='primary' />
      </div>
    );
  }
}

export default App;
