import React, { Component} from 'react';
import '../App.css';
import Audioplayer from './Audioplayer'
import SongList from './SongList';
import Song from './Song'


class Playbar extends Component {

  render(){
      return(
        <div className="playbar">
            <Audioplayer src={this.props.src}/>
        </div>
      );
  }
}


export default Playbar;