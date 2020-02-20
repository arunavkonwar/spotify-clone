import React, { Component} from 'react';
import '../App.css';
import Audioplayer from './Audioplayer'
import SongName from './SongName'


class Playbar extends Component {

  reverseTitleLookup = (e) => {
    for (var key in this.props.rawData) {
      if (this.props.rawData[key]['id'] === e){
          return(this.props.rawData[key]['title']) 
      }
    }
  }

  reverseArtistLookup = (e) => {
    for (var key in this.props.rawData) {
      if (this.props.rawData[key]['id'] === e){
          return(this.props.rawData[key]['artist']) 
      }
    }
  }

  render(){
      return(
        <div>
          <div className="playbar">
              <div className="playbar-songName">
              {/* <SongName rawData={this.props.rawData} songPlaying={this.props.songPlaying} id={this.props.songPlaying}/> */}
              {/* {this.reverseTitleLookup(this.props.songPlaying)}<br></br>
              {this.reverseArtistLookup(this.props.songPlaying)} */}
              </div>
              <div className="audio-player-center">
              <Audioplayer src={this.props.src} storage={this.props.storage}/>
              </div>
          </div>
        </div>
      );
  }
}


export default Playbar;