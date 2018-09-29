import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [
        {id: 1, title: 'Title 1', description: 'Description 1'},
        {id: 2, title: 'Title 2', description: 'Description 2'}
      ],
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
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
