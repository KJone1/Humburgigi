import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

const Link = styled.li`
  justify-content: space-between;
  align-items: center;

  padding: 0.5em;

  /* margin: 1em; */
  img {
    transition: width ease-in-out 200ms;
    max-width: var(--nav-img-sz);

    :hover {
      width: calc(var(--nav-img-sz) * 1.2);
    }
    .st0 {
      fill: #3a332d;
      stroke: #000000;
      stroke-width: 0.5;
      stroke-miterlimit: 10;
    }

    h4 {
      position: absolute;
    }
  }
`;

function Header() {
  const [selected, setSelected] = useState(3);

  return (
    <HeaderContainer>
      <nav>
        <ul>
          <Link>
            <NavLink onClick={() => setSelected(0)} to="/send">
              <h3>שלח סיקור</h3>
              <img src={fileIcon} alt="form" />
              {selected === 0 ? <h4>*</h4> : null}
            </NavLink>
          </Link>

          <Link>
            <NavLink onClick={() => setSelected(1)} to="/map">
              <h3>מפה</h3>
              <img src={mapIcon} alt="map" />
              {selected === 1 ? <h3>*</h3> : null}
            </NavLink>
          </Link>

          <Link>
            <NavLink onClick={() => setSelected(3)} to="/">
              <h3>הכל</h3>
              <img src={allIcon} alt="all" />
              {selected === 3 ? <h3>*</h3> : null}
            </NavLink>
          </Link>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
