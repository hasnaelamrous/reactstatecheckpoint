import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./profile.avif";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Layla El",
        bio: "Layla is a seasoned graphic designer with over 10 years of experience in branding and illustration. She loves turning ideas into visually compelling stories. ",
        img: profile,
        profession: "Graphic Designer",
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
      <div className="App mx-auto text-center" style={{ width: "800px" }}>
        <h1 style={{ color: 'purple' }}>React  Profile</h1>
        <button   style={{
                    backgroundColor: '#816b89',border: 'none',width: '150px',padding: '8px',fontWeight: '500',borderRadius: '3px', color: 'white'
                  }}
                  
                  onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div   style={{ marginTop: "20px", backgroundColor: "#816b89",padding: "20px",borderRadius: "10px",textAlign: "center" }}>
            <img  style={{ height: "200px",borderRadius: "10px",objectFit: "cover", marginBottom: "10px"}} src={person.img} alt="Profile" />
            <h2 style={{ color: 'white' }}>{person.fullName}</h2>
             <h4 style={{ color: 'white' }}>{person.profession}</h4>
            <p style={{ color: 'white' }}>{person.bio}</p>
           
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

