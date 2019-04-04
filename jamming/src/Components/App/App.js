import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state.searchResults = {
      name: [],
      artist: [],
      album: [],
      id: []
    };
    this.playlistName = this.playlistName.bind(this);
    this.playlistTracks = this.playlistTracks.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks.push(track);
    this.setState({playlist: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(savedTrack => savedTrack.id !==track.id);
    this.setState({playlist: tracks});
  }

  render() {
    return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <!-- Add a SearchBar component -->
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
      <Playlist playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack} />
    </div>
  </div>
</div>
    );
  }
}

export default App;
