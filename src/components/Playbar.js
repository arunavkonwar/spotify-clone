import React, { Component} from 'react';
import '../App.css';
import Audioplayer from './Audioplayer'
import SongName from './SongName'


class Playbar extends Component {

  render(){
      return(
        <div>
          <div className="playbar">
              {/* <div className="playbar-songName"> */}
              {/* <SongName rawData={this.props.rawData} songPlaying={this.props.songPlaying} id={this.props.songPlaying}/> */}
              {/* </div> */}
              <Audioplayer src={this.props.src} storage={this.props.storage}/>
          </div>
        </div>
      );
  }
}


export default Playbar;