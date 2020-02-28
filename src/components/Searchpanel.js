import React, { Component } from "react";
import "../App.css";
import Song from "./Song";

class Searchpanel extends Component {
  constructor(props) {
    super(props);
    //this.handler = this.handler.bind(this);

    this.state = {
      src: "test-audio/Munich.mp3",
      elements: null,
      elementsRaw: null,
      searchterm: ""
    };

    function handler(num) {
      this.setState({
        src: this.state.num
      });
    }
  }

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  searchLookup = e => {
    e.preventDefault();
    var searchResults = [];
    var ans = this.state.elementsRaw;

    for (var key in ans) {
      if (ans[key]["title"].includes(e.target.value)) {
        searchResults.push(
          <Song
            title={ans[key]["title"]}
            album={ans[key]["album"]}
            artist={ans[key]["artist"]}
            action={this.props.action}
            albumCover={ans[key]["albumCover"]}
          />
        );
      }
    }

    this.setState({
      elements: searchResults
    });
  };

  componentDidMount() {
    var elements = [];

    for (var key in this.props.rawData) {
      elements.push(
        <Song
          title={this.props.rawData[key]["title"]}
          artist={this.props.rawData[key]["artist"]}
          album={this.props.rawData[key]["album"]}
          action={this.props.action}
          albumCover={this.props.rawData[key]["albumCover"]}
        />
      );
      this.shuffle(elements);
    }

    this.setState({
      elements: elements,
      elementsRaw: this.props.rawData
    });
  }

  render() {
    var elements = [];
    return (
      <div>
        <div class="filter-bar">
          <input
            type="email"
            value={this.state.email}
            class="form-control"
            name="searchTerm"
            placeholder="Search for your band"
            onChange={this.searchLookup}
          ></input>
          <br></br>
        </div>
        <div className="song-list">{this.state.elements}</div>
      </div>
    );
  }
}

export default Searchpanel;
