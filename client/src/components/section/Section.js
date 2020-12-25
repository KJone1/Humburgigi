import styled from "styled-components";

import blueStripes from "../../resorces/background/blue-stripes.svg";
import orangeStripes from "../../resorces/background/orange-stripes.svg";
import purpleStripes from "../../resorces/background/purple-stripes.svg";
import space from "../../resorces/background/space.svg";
import earth from "../../resorces/background/earth.svg";

import earth765 from "../../resorces/background/earth765.svg";

const SectionContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: ${({ isCol }) => (isCol ? "column" : "row")};
  width: 100vw;
  padding: 2%;

  span {
    height: 2px;
    margin: 0 auto;
    display: block;
    width: 50%;
    background: black;
  }

  h2 {
    color: var(--thirdly-color);
    text-align: center;
    padding: 0.5em;
  }

  section {
  }

  .section-img {
    position: absolute;
  }

  height: ${({ height }) => height || "100vh"};

  background-image: ${({ color }) => {
    switch (color) {
      case "blue":
        return `url(${blueStripes});`;

      case "orange":
        return `url(${orangeStripes}); `;

      case "purple":
        return `url(${purpleStripes}); `;

      case "space":
        return `url(${space});
                background-repeat: no-repeat;
                background-size: cover;`;
      case "earth":
        return `url(${earth});   
                background-repeat: no-repeat;
                background-size: cover;`;
      default:
        return ";";
    }
  }};
`;

const CardSectionContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2em;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .scroll {
    overflow-y: scroll;
  }

  .mobile {
    background-image: ${({ color }) => `url(${color + "-sz"})`};
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 765px) {
    display: block;
    height: auto;
    padding: 2em;
  }
`;

export const CardSection = ({ children, color }) => {
  const get_source = (color) => {
    switch (color) {
      case "space":
        return space;
      case "earth":
        return earth;
    }
  };

  return (
    <CardSectionContainer color={color}>
      {/* <img id="section-img" src={get_source(space)} /> */}
      {children}
    </CardSectionContainer>
  );
};

export const Section = (props) => {
  const get_source = (color) => {
    switch (color) {
      case "space":
        return space;
      case "earth":
        return earth;
    }
  };

  return (
    <SectionContainer transform={props.transform} {...props}>
      {/* <img id="section-img" src={`${get_source(props.color)} `} /> */}
      {props.children}
    </SectionContainer>
  );
};
