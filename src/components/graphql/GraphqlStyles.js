import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity:.5;
    }
    100%{
        opacity:0;
    }
`;

const headingAni = props => {
  if (props.y === 0) {
    return 30;
  } else {
    return 30 - props.y * 2;
  }
};

export const ScrollDownText = styled.div`
  display: ${({ y }) => (y < 50 ? "block" : "none")};
  transition: 1s;
  position: absolute;
  opacity: 0.5;
  color: #fff;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  text-align: center;
  animation: ${blink} 0.9s ease-out infinite;
`;

export const GraphQLPage = styled.div`
  width: 100%;
  background-color: #95a9cd;
  min-height: 100vh;
  position: relative;
  .heading {
    top: ${props => headingAni(props)}px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 40px;
  }
`;

const languageAni = ({ y }, offset) => {
  return 100 - (y - offset) > 25 ? 100 - (y - offset) : 25;
};

export const Language = styled.h1`
  position: absolute;
  width: 100%;
  color: #fff;
  top: 150px;
  font-size: 60px;
  display: ${props => (props.y >= 30 && props.y <= 1000 ? "block" : "none")};
  left: ${props => languageAni(props, 30)}%;
`;

export const LanGQL = styled.h1`
  position: absolute;
  top: 220px;
  width: 100%;
  color: #000;
  font-size: 50px;
  display: ${props => (props.y >= 60 && props.y <= 1000 ? "block" : "none")};
  left: ${props => languageAni(props, 60)}%;
`;

export const LanReact = styled.h1`
  position: absolute;
  top: 280px;
  width: 100%;
  color: #000;
  font-size: 50px;
  display: ${props => (props.y >= 60 && props.y <= 1000 ? "block" : "none")};
  left: ${props => languageAni(props, 90)}%;
`;
