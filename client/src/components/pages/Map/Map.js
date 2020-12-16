import styled from "styled-components";
import RenderBurger from "../../burger3d/Burger";
import { Card, Places } from "../../section/cards/Cards";
import { Section } from "../../section/Section";
import React, { Component } from "react";

import Gmap from "./Gmap";

const StyledContainer = styled.main``;

const Map = () => {
  return (
    <StyledContainer>
      <Section color="earth">
        <RenderBurger
          rotate={[0, 0.01, 0]}
          position={[0, -1, 0]}
          ambientLight
        />
      </Section>
      <Section color="blue">
        <Card color="orange">
          <Gmap />
        </Card>
      </Section>
      <Section color="blue">
        <Places color="orange" />
      </Section>
    </StyledContainer>
  );
};

export default Map;
