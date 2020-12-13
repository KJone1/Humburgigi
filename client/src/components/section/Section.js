import styled from "styled-components";
import background from "../../resorces/background.svg";
import blueStripes from "../../resorces/blue-stripes.svg";
import orangeStripes from "../../resorces/orange-stripes.svg";

export const Section = styled.article`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5em;
  grid-gap: 2em;

  ${({ section }) =>
    section !== 0
      ? `background-image: url(${orangeStripes}); 
      .card {
    background-color: var(--complementary-second-color);
    box-shadow: 20px 40px var(--complementary-color);
    border: 2px var(--complementary-color) solid;
  }`
      : `background-image: url(${blueStripes});
      .card {
    background-color: var(--secondary-color);
    box-shadow: 20px 40px var(--thirdly-color);
    border: 4px var(--thirdly-color) solid;
  }`}

  h2 {
    color: var(--thirdly-color);
    text-align: center;
    padding: 0.5em;
  }

  span {
    height: 2px;
    margin: 0 auto;
    display: block;
    width: 50%;
    background: black;
  }

  .card {
    width: 80%;
    max-height: calc(100vh - 200px);
    margin: 0 auto;
    border-radius: 30px;
  }

  .About {
    p {
      padding: 2em;
      overflow-y: scroll;
      max-height: 80%;
    }
  }

  .scroll {
    overflow-y: scroll;
  }

  .Top {
    ol {
      padding: 2em;
      text-align: center;

      li {
        font-size: 2em;
      }
    }
  }

  .Map {
    grid-row: 1/3;
    height: 100%;
    width: 100%;

    img {
      display: block;
      height: 80%;
      width: auto;
      object-fit: contain;
    }
  }
  .News {
    grid-column: 2;
  }

  @media (max-width: 765px) {
    display: block;
    height: auto;
    padding: 2em;

    .card {
      width: 90%;
      height: fit-content;
      margin: 0 auto 5em auto;
    }
  }
`;

export const Section1 = styled.article`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5em;
  grid-gap: 2em;
`;
