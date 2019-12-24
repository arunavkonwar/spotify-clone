import React, { Component} from 'react';
import '../App.css';


class Sidebutton extends Component {
  constructor(props){
      super(props);
  }

  render(){
    /** Solved using this 
     * https://stackoverflow.com/questions/48497358/reactjs-maximum-update-depth-exceeded-error
     * 
     */
      return(
        <div className="sidebutton">
        <a href onClick={()=>this.props.focus(this.props.mapname)}>{this.props.linkname}</a>
        </div>
      );
  }
}


export default Sidebutton;