import React, {Component} from "react";
import "../components/watch.css";

class Watch extends Component {
  state = {
    clockTime: "",
    hoursDifference: this.props.timeZone,
    intervalID: 0,
  };

  clockTiking = () => {
    let now = new Date();
    let hours = now.getHours() + this.state.hoursDifference;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours >= 24) {
      hours = hours - 24;
    }

    //Set minutes
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    //Set seconds
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    let clockTime = hours + ":" + minutes + ":" + seconds;

    this.setState({...this.state, clockTime});
  };

  componentDidMount() {
    let intervalId = setInterval(this.clockTiking, 1000);
    this.setState({intervalId: intervalId});
  }

  handleClick = (city) => {
    this.props.removeClock(city);
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render(props) {
    return (
      <div className="watch">
        <button
          className="delete-btn"
          onClick={() => this.handleClick(this.props.city)}
        >
          x
        </button>
        <p> {this.props.city} :</p>
        {this.state.clockTime}
      </div>
    );
  }
}

export default Watch;
