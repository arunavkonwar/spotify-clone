import React, { Component } from "react";
import "../App.css";
import fire from "../config/fire";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import Panel from "./Panel";
import Playbar from "./Playbar";
import axios from "axios";
import Navigation from "./Navigation";

class Home1 extends Component {
  constructor(props) {
    super(props);
    //this.logout=this.logout.bind(this)
    //this.handler=this.handler.bind(this)
    //this.changefocus=this.changefocus.bind(this)
    // test-audio/Munich.mp3
    this.state = {
      src: "1",
      focus: {
        songs: true,
        search: false,
        library: false
      },
      rawData: null,
      songPlaying: null,
      songStorage:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a43f4.appspot.com/o"
    };
  }

  logout() {
    fire.auth().signOut();
  }

  handler = e => {
    console.log(`The ${e} link was clicked.`);
    this.setState({
      src: e,
      songPlaying: e
    });
  };

  changefocus = e => {
    console.log(`The ${e} link was FOCUSED.`);
    const panelmapping = {
      songs: true,
      search: false,
      library: false
    };

    for (var key in panelmapping) {
      if (key === e) {
        panelmapping[key] = true;
      } else {
        panelmapping[key] = false;
      }
    }
    this.setState({
      focus: panelmapping
    });
  };

  componentDidMount() {
    axios.get("http://localhost:3000/songs").then(response => {
      //console.log(response.data)
      this.setState({
        rawData: response.data
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Panel
            action={this.handler}
            focuspanel={this.state.focus}
            rawData={this.state.rawData}
          />
          <Sidebar
            focus={this.changefocus}
            rawData={this.state.rawData}
            songPlaying={this.state.songPlaying}
          />
          <Playbar
            src={this.state.songPlaying}
            storage={this.state.songStorage}
            rawData={this.state.rawData}
            songPlaying={this.state.songPlaying}
          />
        </div>
      </Router>
    );
  }
}

export default Home1;
