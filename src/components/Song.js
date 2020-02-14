import React, { Component} from 'react';
import '../App.css';

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
        <a onClick={() => this.props.action(`/test-audio/${this.props.artist}`)}>{this.props.songName }</a><br></br>
        <h6><a>{this.props.artist}</a>   |   <a>{this.props.album}</a></h6> 
        </div>
      );
  }
}



export default Song;