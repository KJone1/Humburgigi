import React from "react";
import styled from "styled-components";
import Divider from "../../divider/divider";
import {
  StyledCardContainer,
  StyledHeader,
} from "../cards-styling/card-styling";

const StyledAboutContainer = styled.div`
  ${StyledCardContainer}
`;
//////////////////// About /////////////////////

const About = () => {
  return (
    <StyledAboutContainer height="520px" className="About-card hr">
      <StyledHeader>עליי</StyledHeader>
      <Divider />
      <p>
        וואלה כן אח שלי Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer lacinia, justo ac interdum ultricies, nunc ipsum volutpat nulla,
        vehicula blandit diam metus at purus. Etiam id metus elit. Sed id justo
        est. Etiam pulvinar erat sit amet urna viverra semper et ut nibh. Fusce
        pulvinar nibh nunc, ac efficitur eros ullamcorper eu. Quisque aliquet,
        libero a porta dictum, massa eros fermentum odio, ac hendrerit lorem
        felis in arcu. Morbi sit amet felis erat. Quisque a feugiat turpis.
        Quisque ornare vehicula bibendum. Morbi nec sollicitudin ipsum.
      </p>
    </StyledAboutContainer>
  );
};

export default About;
