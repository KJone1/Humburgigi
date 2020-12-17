import styled, { css } from "styled-components";
import colors from "../../../styles/colors";
import "../../../styles/fonts.css";

export const StyledCardContainer = css`
  /* p {
    max-height: calc(100vh - 200px - 6em);
  } */
  background-color: ${colors.mainOrange};
  width: 60vw;
  /* width: 80%; */
  height: ${(props) => props.height};
  margin: 0 auto;
  border-radius: 30px;
  padding: 2em;
  box-shadow: 20px 40px ${colors.shadowblack};
  border: 4px solid ${colors.white};
  margin-bottom: 50px;
  font-family: "Varela Round";
  font-size: 22px;
`;

export const StyledHeader = styled.h2`
  color: ${colors.mainBlue};
  text-align: center;
  padding: 0.5em;
`;
