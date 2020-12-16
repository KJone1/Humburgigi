import React from "react";
import styled from "styled-components";
import Divider from "../../divider/divider";
import {
  StyledCardContainer,
  StyledHeader,
} from "../cards-styling/card-styling";

const Top5 = () => {
  return (
    <StyledTop5Container height="520px">
      <Top5list className="eng">
        <StyledHeader>Top 5</StyledHeader>
        <Divider />
        <ol>
          <li>susu</li>
          <li>garage</li>
          <li>hamburgigi</li>
          <li>what</li>
          <li>yup</li>
        </ol>
      </Top5list>
    </StyledTop5Container>
  );
};

export default Top5;

const StyledTop5Container = styled.div`
  ${StyledCardContainer}
`;
const Top5list = styled.ul`
  padding: 2em;
  text-align: center;

  li {
    font-size: 2em;
  }
`;
