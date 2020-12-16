import styled, { css } from "styled-components";
import colors from "../../../styles/colors";
import Divider from "../../divider/divider";
import {
  StyledCardContainer,
  StyledHeader,
} from "../cards-styling/card-styling";

const StyledPlanedContainer = styled.div`
  ${StyledCardContainer}
`;

//////////////////// Calender /////////////////////

const Planed = () => {
  return (
    <StyledPlanedContainer height="520px" className="hr">
      <StyledHeader>לוח שנה</StyledHeader>
      <Divider />
    </StyledPlanedContainer>
  );
};
export default Planed;
