import React, { Component } from "react";
import styled from "styled-components";
import { PageStyle } from "../styles/PageStyles";

const IntroPage = styled.div`
  min-height: 100vh;
`;

const ImageProfile = styled.div`
  min-height: 50vh;
  background-image: linear-gradient(to bottom right, #5b247acc, #1bcedfcc);
  h2,
  h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 50px;
    line-height: 0.8;
    color: #222;
  }
  h3 {
    font-size: 40px;
  }
`;

const ImageWrapper = styled.div`
  padding-top: 15px;
  img {
    width: 200px;
  }
  .rounded {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .impact {
    position: relative;
    margin: 0 auto;
    border-radius: 50%;
    width: 240px;
    height: 240px;
    background-color: #fff;
  }
`;

const FlexBox = styled.div`
  display: flex;
  font-size: 20px;
  .grid {
    flex: 1;
  }
  .padded {
    padding: 20px 40px;
  }
  .hor-padded {
    padding: 10px 40px 10px 0px;
  }
  .label {
    text-align: right;
    text-transform: uppercase;
    font-weight: bold;
  }
  .hi {
    font-size: 300%;
    text-transform: uppercase;
  }
`;

class Intro extends Component {
  state = {
    name: "",
    description: "_"
  };
  componentDidMount() {
    let name = "Hi! I am Daniel Yoo";
    let description = "Fullstack React/NodeJS Developer_";
    let interval = 110;
    for (let i = 0; i <= name.length; i++) {
      setTimeout(() => {
        this.setState({ name: name.substring(0, i) });
      }, i * interval);
    }
    for (let i = 1; i < description.length; i++) {
      setTimeout(() => {
        this.setState({ description: description.substring(0, i) });
      }, name.length * interval + i * interval);
    }
  }
  render() {
    return (
      <PageStyle>
        <IntroPage>
          <ImageProfile>
            <ImageWrapper>
              <div className="impact">
                <div className="rounded">
                  <img src={require("../../img/me.jpg")} />
                </div>
              </div>
            </ImageWrapper>
            <h2>{this.state.name}</h2>
            <h3>{this.state.description}</h3>
          </ImageProfile>
          <FlexBox>
            <div
              className="grid padded"
              style={{ borderRight: "1px solid #eee" }}
            >
              <FlexBox>
                <div className="grid label hor-padded">name</div>
                <div className="grid hor-padded">Daniel Yoo</div>
              </FlexBox>
              <FlexBox>
                <div className="grid label hor-padded">school</div>
                <div className="grid hor-padded">Middlesex County College</div>
              </FlexBox>
              <FlexBox>
                <div className="grid label hor-padded">specialized in</div>
                <div className="grid hor-padded">Web Development</div>
              </FlexBox>
              <FlexBox>
                <div className="grid label hor-padded">languages</div>
                <div className="grid hor-padded">Javascript, Java, Python</div>
              </FlexBox>
              <FlexBox>
                <div className="grid label hor-padded">Frameworks</div>
                <div className="grid hor-padded">
                  NodeJS, ReactJS, GraphQL, JavaSwing
                </div>
              </FlexBox>
              <FlexBox>
                <div className="grid label hor-padded">Database</div>
                <div className="grid hor-padded">MongoDB(NoSQL), SQL</div>
              </FlexBox>
              <FlexBox>
                <div className="grid label hor-padded">Experience</div>
                <div className="grid hor-padded">
                  Volunteering at Honors Review, built LMS for teachers and
                  students since Jan, 2018
                </div>
              </FlexBox>
            </div>
            <div className="grid padded" style={{ lineHeight: "1.5" }}>
              <span className="hi">Hi,</span> I am so happy to have another
              visitor for my website! I am a passionate full-stack developer,
              who is very competent in Javascirpt frameworks such as ReactJS and
              NodeJS. With my ceaseless passion, I decided to also teach my
              skills in public, so I started my personal youtube Channel,
              DannyTWLC, currently with 150 subscribers and taught Java Swing,
              ReactJS, NodeJS and few basic languages in Korean. Feel free to
              navigate my projects through the side navigation!
            </div>
          </FlexBox>
        </IntroPage>
      </PageStyle>
    );
  }
}

export default Intro;
