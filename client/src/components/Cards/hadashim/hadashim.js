import React from "react";
import styled from "styled-components";
import Divider from "../../divider/divider";
import {
  StyledCardContainer,
  StyledHeader,
} from "../cards-styling/card-styling";

const StyledNewContainer = styled.div`
  ${StyledCardContainer}
`;

//////////////////// News /////////////////////

const News = () => {
  return (
    <StyledNewContainer height="520px" className="hr">
      <StyledHeader>חדשות</StyledHeader>
      <Divider />
    </StyledNewContainer>
  );
};
export default News;
