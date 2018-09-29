import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar />
      </div>
    );
  }
}

export default App;
