import React, { Component } from "react";
import styled from "styled-components";
import Intro from "../Intro/Intro";
import Graphql from "../graphql/Graphql";

const MainStyle = styled.main`
  margin-left: 140px;
`;

class Main extends Component {
  renderPage = no => {
    switch (no) {
      case 0:
        return <Intro />;
      case 1:
        return <Graphql />;
      default:
        return <Intro />;
    }
  };
  render() {
    return <MainStyle>{this.renderPage(this.props.selected)}</MainStyle>;
  }
}
export default Main;
