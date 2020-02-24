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
  // <a onClick={() => this.props.action(`/test-audio/${this.props.id}`)}>{this.props.title}</a><br></br>
  render(){

      return(
        <div className="one-song">
        <div>
        <img src={this.props.albumCover} width="50px"/>
        </div>
        
        <a onClick={() => this.props.action(this.props.id)}>{this.props.title}</a><br></br>
        <h6><a>{this.props.artist}</a>   |   <a>{this.props.album}</a></h6> 
        </div>
      );
  }
}



export default Song;