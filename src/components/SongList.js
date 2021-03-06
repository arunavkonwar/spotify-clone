import React, { Component } from "react";
import "../App.css";
import Song from "./Song";
import Navigation from "./Navigation";

class SongList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    /*

    GOOD EXAMPLE OF ITERATING THROUGH DICTIONARIES IN JAVASCRIPT
    https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript

    */
    var elements = [];

    for (var key in this.props.rawData) {
      console.log(key, this.props.rawData[key]);
      elements.push(
        <Song
          title={this.props.rawData[key]["title"]}
          album={this.props.rawData[key]["album"]}
          artist={this.props.rawData[key]["artist"]}
          action={this.props.action}
          id={this.props.rawData[key]["id"]}
          albumCover={this.props.rawData[key]["albumCover"]}
        />
      );
      console.log(this.props.albumCover);
    }

    return (
      <div>
        <Navigation />
        <div className="song-list">{elements}</div>
      </div>
    );
  }
}

export default SongList;
