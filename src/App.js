import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import youtubeSearch from 'youtube-api-v3-search';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = '';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  }

  videoSearch = (term) => {
    const options = {
      q: term,
      part:'snippet',
      type:'video',
      maxResults: '5'
    };

    youtubeSearch(YOUTUBE_API_KEY, options).then((videos) => {
      console.log(videos);
      this.setState({
        videos: videos.items,
        selectedVideo: videos.items[0]
      });
    }).catch((error) => console.log('Error:', error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
