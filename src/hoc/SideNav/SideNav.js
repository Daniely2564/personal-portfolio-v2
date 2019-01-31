import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const NavStyle = styled.nav`
  width: 140px;
  position: fixed;
  background-color: ${props => props.theme[props.background]};
  min-height: 100%;
  padding: 10px;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2);
  transition: 1s;
`;

const MenuItem = styled.div`
  text-align: center;
  color: ${props => props.theme[props.color]};
  width: 120px;
  height: 120px;
  padding: 20px 0;
  background-color: ${props => props.theme.WHITE};
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  margin-bottom: 15px;
  &:hover {
    transform: scale(1.1) rotate(-1.5deg);
  }
  .icon {
    position: absolute;
    font-size: 70px;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
  .icon.svg {
    width: 80px;
    top: 40%;
  }
  .desc {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: 110px;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.3px;
  }
`;

const menus = [
  {
    color: "react",
    name: "React",
    icon: "react",
    no: 2
  },
  {
    color: "nodejs",
    name: "Node js",
    icon: "node js",
    no: 3
  },
  {
    color: "youtube",
    name: "My Channel",
    icon: "youtube",
    no: 4
  }
];

class SideNav extends Component {
  render() {
    const { background, selected, selectChange } = this.props;
    return (
      <NavStyle background={background[selected]}>
        <MenuItem color="GREY" onMouseOver={() => selectChange(0)}>
          <Icon name="user" className="icon" />
          <div className="desc">Daniel Yoo</div>
        </MenuItem>
        <MenuItem color="graphql" onMouseOver={() => selectChange(1)}>
          <img
            alt="graphql"
            src={require("../../img/graphql-logo.svg")}
            className="icon svg"
          />
          <div className="desc">GraphQL</div>
        </MenuItem>
        {menus.map(menu => {
          return (
            <MenuItem
              key={menu.name}
              color={menu.color}
              onMouseOver={() => selectChange(menu.no)}
            >
              <Icon name={menu.icon} className="icon" />
              <div className="desc">{menu.name}</div>
            </MenuItem>
          );
        })}
      </NavStyle>
    );
  }
}

export default SideNav;
