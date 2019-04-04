import React from "react";
import Sidebar, { SidebarStyles } from "react-sidebar";
import Launch from "./model/launch";
import styled, { createGlobalStyle, css } from "styled-components";

const SidebarChildWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`

const Parent = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
`

const LinkBtn = styled.button`
  border: 2px solid #42D6CA;
  color: #42D6CA;
  transition: all .5s ease;
  &:before {
    content: ' ';
    border: 2px transparent solid;
    position: absolute;
    left: 50%;
    top: 0px;
    transform: translateX(-50%);
    box-sizing: border-box;
    width: 120px;
    height: 50px;
    transition: all .7s ease;
  }
  &:hover {
    background-color: transparent;
    border-radius: 20px;
    &:before {
      border-radius: 30px;
      border: 1px #42D6CA solid;
    }
  }
`


const LinkContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 0px;

  hr {
    visibility: hidden
  }

  ${LinkBtn} {
    width: 100px;
    height: 30px;
    box-sizing: border-box;
    background: none;
    border: none;
    margin: 10px;
  }

  ${LinkBtn}: focus {
    outline: none;
    opacity: .2;
  }
`


// Declaring globe -> calling globe functions
declare const globe: any;
console.log(globe);

class App extends React.Component {
  state = {
    launches: [],
    sidebarOpen: true
  };

  componentWillMount() {
    this.fetchNextLaunches();
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

    const SidebarChild = (
      <Parent>
        <SidebarChildWrapper>
          <LinkContainer>
            <LinkBtn>Neco 1</LinkBtn>
          </LinkContainer>
        </SidebarChildWrapper>
      </Parent>
    )

    return (
      <>
        <Sidebar sidebar={''} docked={true} open={true}>
          {/* {header} */}
          {SidebarChild}
        </Sidebar>
      </>
    );
  }
}

export default App;
