import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const mintColor = '#42D6CA'
const darkMintColor = '#0f7e75'

class Sidebar extends React.Component {
  //
  // fetchLaunchPads() {
  //   fetch('https://launchlibrary.net/1.4/pad').then((res: any) => {
  //     res.json().then((data: any) => {
  //       this.setState({ launches: data.pads });
  //     });
  //   })
  // }
  //
  // async triggerGlobeChange() {
  //   await this.fetchLaunchPads()
  // }

  render() {
    return (
      <>
        <Parent>
          <NavWrapper>
            <NavBtnWrapper>
              <NavBtn>upcoming launches</NavBtn>
            </NavBtnWrapper>
            <NavBtnWrapper style={{marginTop: '80px'}}>
              <NavBtn>launch locations</NavBtn>
            </NavBtnWrapper>
            <NavBtnWrapper style={{marginTop: '160px'}}>
              <NavBtn>agencies</NavBtn>
            </NavBtnWrapper>
          </NavWrapper>
        </Parent>
      </>
    );
  }
}

const NavBtnWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  hr {
    visibility: hidden;
  }
`

const NavBtn = styled.button`
  width: 150px;
  height: 30px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid ${mintColor};
  margin: 10px;
  color: white;
  font-family: 'Archivo Narrow', sans-serif;
  transition: all .5s ease;
  white-space: nowrap

  &:before {
    content: ' ';
    border: 2px transparent solid;
    position: absolute;
    left: 5px;
    top: 5px;
    box-sizing: border-box;
    width: 160px;
    height: 40px;
    transition: all .7s ease;
  }

  &:active {
    border: 7px transparent solid;
    transition: all .1s ease;
  }

  &:hover {
    background-color: ${darkMintColor};
    border-radius: 20px;
    cursor: pointer;

    &:before {
      border-radius: 20px;
      border: 2px ${mintColor} solid;
    }
  }
`

const Parent = styled.div`
  width: 180px;
  height: 100vh;
  display: flex;
  align-items: center;
`

const NavWrapper = styled.div`
  position: relative;
  height: 30vh;
  display: flex;
  align-items: center;
`

export default Sidebar;
