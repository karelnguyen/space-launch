import React from "react";
import Launch from "./model/launch";
import styled, { createGlobalStyle, css } from "styled-components";
import Sidebar from "./components/Sidebar"

// Declaring globe -> calling globe functions
declare const globe: any;
if (globe) {
  globe.addSatellite(1.4564, 2, 1);
  globe.addMarker(24.7136, 46.6753, "Riyadh");
  globe.addMarker(50.0755, 14.4378, "Prague", true);
}

class App extends React.Component {
  state = {
    launches: [],
    pads: [],
    sidebarOpen: true
  };

  componentWillMount() {
    this.fetchNextLaunches();
    this.fetchLaunchPads();
  }

  fetchNextLaunches() {
    fetch("https://launchlibrary.net/1.4/launch/next/10").then((res: any) => {
      res.json().then((data: any) => {
        let helperArray: Array<Launch> = [];

        data.launches.map((launch: any) => {
          helperArray.push(
            new Launch(
              launch.id,
              launch.name,
              launch.windowstart,
              launch.windowend,
              launch.location.name,
              launch.location.countryCode
            )
          );
        });

        this.setState({ launches: helperArray });
      });
    });
  }

  fetchLaunchPads() {
    fetch('https://launchlibrary.net/1.4/pad').then((res: any) => {
      res.json().then((data: any) => {
        this.setState({ pads: data.pads });
      });
    })
  }


  changeGlobe() {
    let el: any = document.getElementById("globe");
    el.style.position = "absolute";
    el.style.opacity = "0.5";
  }

  render() {
    const launches = this.state.launches.map((launch: Launch, key: any) => (
      <div key={launch.id}>{launch.name}</div>
    ));

    const header = (
      <header className="App-header">
        <button onClick={this.changeGlobe}>Try me</button>
        <h1>Space launch</h1>
        {launches}
      </header>
    );

    return (
      <>
        <Parent>
          <Sidebar />
          {/* <div className="main-content">
            {launches}
          </div> */}
        </Parent>
      </>
    );
  }
}

const Parent = styled.div`
  display: flex;
`

export default App;
