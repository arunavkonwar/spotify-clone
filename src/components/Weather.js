import React, { Component } from "react";
//const axios = require('axios');

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 1
    };
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.setState({ temperature: "from component did mount" });
  }

  /*
  getWeather(){
    
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Guwahati,IN?id=524901&APPID=4bcd773a880e5e47dd907578c55dafd6')
    .then(res => {
      console.log(res.data.list[0].main.temp);
      //var a = res.data.list[0].main.temp;
      this.setState({
        temperature: res.data.list[0].main.temp,
      });
    })
    .catch(err => {
      console.log(err);
    });
    //this.setState({temperature: 'lol'})
  }
*/

  render() {
    return (
      <div>
        <p>Weather</p>
        <button class="button" onClick={this.getWeather}>
          <span>Get Weather</span>
        </button>
        <div class="ans">{this.state.temperature}</div>
      </div>
    );
  }
}

export default Weather;
