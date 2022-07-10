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
        {name: 'SongName3', artist: 'ArtistName3', album: 'AlbumName3', id: 'theID3'},
        {name: 'SongName4', artist: 'ArtistName4', album: 'AlbumName4', id: 'theID4'},
        {name: 'SongName5', artist: 'ArtistName5', album: 'AlbumName5', id: 'theID5'}
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);

  }

  addTrack(track){
    let tracks = this.state.playlistTracks;

    //if the track already exists on the playlist, do nothing
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;

    //remove the track from the array of tracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name})
  }

  savePlaylist() {
    let trackURIs = [];
    let tracks = this.state.playlistTracks;

    tracks.forEach(savedTrack => trackURIs.push(savedTrack.uri));
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
