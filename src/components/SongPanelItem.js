import React, { Component } from "react";
import "../App.css";

class SongPanelItem extends Component {
  click(e) {
    e.preventDefault();
    this.props.handler(this.props.songName);
    console.log(this);
    return;
  }

  /* CHANGE PARENT STATE FROM CHILD 
      Pass a handler function as prop to the child to achieve this
      https://www.techiediaries.com/access-update-parent-state-child-component-react/ 
  */
  //<Audioplayer src={"/test-audio/" + this.props.src} />
  // <a onClick={() => this.props.action(`/test-audio/${this.props.id}`)}>{this.props.title}</a><br></br>
  render() {
    return (
      <div>
        <a onClick={() => this.props.action(this.props.id)}>
          <div className="song-panel-item-top">
            <img src={this.props.albumCover} />
            <h6>{this.props.title}</h6>
          </div>
        </a>
        <div className="song-panel-item-bottom">
          <h6>{this.props.artist}</h6>
        </div>
      </div>
    );
  }
}

export default SongPanelItem;
