import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import {
  GraphQLPage,
  ScrollDownText,
  Language,
  LanGQL,
  LanReact
} from "./GraphqlStyles";
import { PageStyle } from "../styles/PageStyles";

class Graphql extends Component {
  state = {
    deltaY: 0
  };
  moving = {};
  scrollHandler = event => {
    const { deltaY } = event;
    if (deltaY >= 0) {
      this.setState({ deltaY: this.state.deltaY + 5 });
    } else {
      if (this.state.deltaY > 0) {
        this.setState({ deltaY: this.state.deltaY - 5 });
      }
    }
  };
  render() {
    console.log(this.moving.heading);
    const { deltaY } = this.state;
    return (
      <PageStyle>
        <GraphQLPage y={deltaY} onWheel={this.scrollHandler}>
          <h1 className="heading">LMS (Learning Management System)</h1>
          <ScrollDownText y={deltaY}>
            Scroll Down
            <br />
            <br />
            <Icon name="angle down" />
            </ScrollDownText>
          <Language y={deltaY}>Languages</Language>
          <LanGQL y={deltaY}>{"> "}GrpahQL</LanGQL>
          <LanReact y={deltaY}>{"> "}ReactJS</LanReact>
        </GraphQLPage>
      </PageStyle>
    );
  }
}

export default Graphql;
