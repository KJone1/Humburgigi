import React from "react";
import styled from "styled-components";
import spacebg from "../../resorces/background/space.svg";
import blueStripes from "../../resorces/background/blue-stripes.svg";
const StyledBg = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  /* background-image: url(${blueStripes}); */
  /* background-image: url("https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8&w=1000&q=80");
  background-size: cover; */

  /* background-color: ${(props) => props.color}; */
  display: grid;
  /* grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2em; */
  padding-top: 100px;
`;

const PageView = (props) => {
  return <StyledBg color={props.bgcolor}>{props.children}</StyledBg>;
};

export default PageView;
