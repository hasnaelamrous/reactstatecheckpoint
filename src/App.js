import React from "react";
import "./App.css";
import fleur from "./fleur.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Hasna El",
        bio: "A  developer ",
        img: fleur,
        profession: "Technicien",
      },
      shows: false,
      timeSinceMount: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>React Class-Based Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img style={{ height: '200px', objectFit: 'cover' }} src={person.img} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}

        <p style={{ marginTop: "30px" }}>
          Time since component mounted: {timeSinceMount} seconds
        </p>
      </div>
    );
  }
}

export default App;

