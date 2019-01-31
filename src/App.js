import React, { Component } from "react";
import SideNav from "./hoc/SideNav/SideNav";
import { ThemeProvider } from "styled-components";
import Main from "./components/main/Main";

const theme = {
  RED: `#DB2828`,
  ORANGE: `#F2711C`,
  YELLOW: `#FBBD08`,
  OLIVE: `#B5CC18`,
  GREEN: "#21BA45",
  TEAL: "#00B5AD",
  BLUE: "#2185D0",
  VIOLET: "#6435C9",
  PURPLE: "#A333C8",
  PINK: "#E03997",
  BROWN: "#A5673F",
  GREY: "#767676",
  BLACK: "#1B1C1D",
  WHITE: "#fff",
  ORANGEYELLOW: "#F8B195",
  ORANGERED: "#F67280",
  DARKPINK: "#C06C84",
  DARKVIOLET: "#6C5B7B",
  YELLOWBLUE: "#355C7D",
  LIGHTBLACK: "#2A363B",
  WHITERED: "#FF8C94",
  WHITEORANGE: "#FFAAA6",
  WHITEYELLOW: "#FFD3B5",
  WHITEGREEN: "#DCEDC2",
  WHITEOLIVE: "#A8E6CE",
  VERYLIGHTBLUE: "#E7EFF6",
  LIGHTBLUE: "#ADCBE3",
  BLUE2: "#63ACE5",
  DARKORANGEBLUE: "#4B86B4",
  graphql: "#E535AB",
  react: "#71DEFB",
  nodejs: "#74B141",
  youtube: "#F30007"
};

class App extends Component {
  state = {
    selected: 0
  };
  selectChange = no => {
    this.setState({ selected: no });
  };
  background = ["GREY", "graphql", "react", "nodejs", "youtube"];
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <SideNav
            background={this.background}
            selected={this.state.selected}
            selectChange={this.selectChange}
          />
          <Main selected={this.state.selected} />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
