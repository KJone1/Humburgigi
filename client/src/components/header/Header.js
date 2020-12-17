import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../styles/fonts.css";
import mapIcon from "../../resorces/icons/map.svg";
import allIcon from "../../resorces/icons/places.svg";
import fileIcon from "../../resorces/icons/report.svg";

const HeaderContainer = styled.header`
  width: 100%;
  height: 25vh;
  background-image: ${({ background }) => {
      return background ? background : ";";
    }}
    nav {
    position: relative;
    background-color: var(--complementary-color);
    border: var(--complementary-second-color) solid 2px;

    max-width: fit-content;
    width: 100%;
    /* height: 5vh; */

    margin: auto;

    display: flex;
    z-index: 1000;

    top: 2rem;

    border-radius: 15px;

    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    ul {
      align-items: center;

      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 100%;

      li {
        text-align: center;
        flex-grow: 1;
      }
    }
  }
`;
const StyledNavLink = styled(NavLink)`
  // background-color: blue;

  position: relative;
  font-size: 18px;
  font-weight: bold;
  font-family: "Varela Round";
  /* color: black !important; */
  &.active {
    img {
      height: 50px;
      width: 50px;
    }
    h3 {
      font-size: 24px;
      margin-bottom: 5px;
    }
  }
`;

const Link = styled.li`
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;

  /* margin: 1em; */
`;

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <Link>
            <StyledNavLink to="/send">
              <h3>שלח סיקור</h3>
              <img src={fileIcon} alt="form" height="40px" width="40px" />
            </StyledNavLink>
          </Link>

          <Link>
            <StyledNavLink to="/map">
              <h3>מפה</h3>
              <img src={mapIcon} alt="map" height="40px" width="40px" />
            </StyledNavLink>
          </Link>

          <Link>
            <StyledNavLink exact to="/">
              <h3>הכל</h3>
              <img src={allIcon} alt="all" height="40px" width="40px" />
            </StyledNavLink>
          </Link>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
