import { NavLink } from 'react-router-dom'; 
import React, { Component} from 'react';
import '../App.css';
import Navigation from './Navigation';
import axios from 'axios';
import Audioplayer from './Audioplayer';
import SongList from './SongList';
import Home1 from './Home1'


class Song extends Component {

  click(e){
    e.preventDefault();
    this.props.handler(this.props.songName);
    console.log(this)
    return;
    }

  /* CHANGE PARENT STATE FROM CHILD 
      Pass a handler function as prop to the child to achieve this
      https://www.techiediaries.com/access-update-parent-state-child-component-react/ 
  */
  //<Audioplayer src={"/test-audio/" + this.props.src} /> 
  render(){

      return(
        <div className="one-song">
        <a onClick={() => this.props.action(`/test-audio/${this.props.src}`)}>{this.props.songName }</a>
        </div>
      );
  }
}



export default Song;