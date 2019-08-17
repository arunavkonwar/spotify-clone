import { NavLink } from 'react-router-dom'; 
import React, { Component} from 'react';
import '../App.css';
import ReactAudioPlayer from 'react-audio-player';
import SongList from './SongList';

class Audioplayer extends Component {
  render(){
    //test-audio/RainyZurich.mp3
      return(
        <div className="audioPlayer">
            <ReactAudioPlayer
            src={this.props.src}
            controls
            autoPlay
            />
        </div>
      );
  }
}


export default Audioplayer;