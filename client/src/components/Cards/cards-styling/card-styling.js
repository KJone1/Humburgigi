import styled, { css } from "styled-components";
import colors from "../../../styles/colors";
import "../../../styles/fonts.css";

export const StyledCardContainer = css`
  /* p {
    max-height: calc(100vh - 200px - 6em);
  } */
  /* background-color: ${colors.mainOrange}; */
  width: 60vw;
  /* width: 80%; */
  height: ${(props) => props.height};
  margin: 0 auto;
  /* border-radius: 30px; */
  padding: 2em;
  /* box-shadow: 20px 40px ${colors.shadowblack}; */
  /* border: 4px solid ${colors.white}; */
  margin-bottom: 50px;
  font-family: "Varela Round";
  color: white;
  font-size: 24px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const StyledHeader = styled.h2`
  /* color: ${colors.mainBlue}; */
  font-size: 2em;
  color: white;
  text-align: center;
  padding: 0 0 0.2em;
`;
