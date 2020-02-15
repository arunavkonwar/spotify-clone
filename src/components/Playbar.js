import React, { Component} from 'react';
import '../App.css';
import Audioplayer from './Audioplayer'


class Playbar extends Component {

  render(){
      return(
        <div>
          <div className="playbar">
              <Audioplayer src={this.props.src}/>
          </div>
        </div>
      );
  }
}


export default Playbar;