import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [
        {name: 'SongName', artist: 'ArtistName', album: 'AlbumName', id: 'theID'},
        {name: 'SongName1', artist: 'ArtistName1', album: 'AlbumName1', id: 'theID1'},
        {name: 'SongName2', artist: 'ArtistName2', album: 'AlbumName2', id: 'theID2'}
      ],
      playlistName: "Playlist Name",
      playlistTracks: [
        {name: 'SongName', artist: 'ArtistName', album: 'AlbumName', id: 'theID'},
        {name: 'SongName1', artist: 'ArtistName1', album: 'AlbumName1', id: 'theID1'},
        {name: 'SongName2', artist: 'ArtistName2', album: 'AlbumName2', id: 'theID2'}
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
