import React, { Component} from 'react';
import '../App.css';
import Audioplayer from './Audioplayer'


class Playbar extends Component {

  render(){
      return(
        <div className="playbar">
            
            <Audioplayer/>
        </div>
      );
  }
}


export default Playbar;