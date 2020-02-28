import React, { Component } from "react";
import "../App.css";
import fire from "../config/fire";
import SongName from "./SongName";
import Sidebutton from "./Sidebutton";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="sidenav">
        <div className="siteLogo">
          <img src="images/spotify-logo.png" width="60%" align="center"></img>
        </div>
        <br></br>
        <Sidebutton linkname="Home" mapname="songs" focus={this.props.focus} />
        <Sidebutton
          linkname="Search"
          mapname="search"
          focus={this.props.focus}
        />
        <Sidebutton
          linkname="Your Library"
          mapname="library"
          focus={this.props.focus}
        />
        <div>
          <SongName
            rawData={this.props.rawData}
            songPlaying={this.props.songPlaying}
            id={this.props.songPlaying}
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
