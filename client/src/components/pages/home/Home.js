import styled from "styled-components";
import { Slide } from "react-reveal";

import { Calender, Map, Honorable, Card } from "../../section/cards/Cards";
import { CardSection, Section } from "../../section/Section";
import colors from "../../../styles/colors";
import RenderBurger from "../../burger3d/Burger";
import nameIcon from "../../../resorces/icons/Hamburgigi-hr.svg";

import burger001 from "../../../resorces/images/burger001.jpg";
import burger002 from "../../../resorces/images/burger002.jpg";
import burger003 from "../../../resorces/images/burger003.jpg";
import About from "../../Cards/about/About2";
import News from "../../Cards/hadashim/hadashim";
import Top5 from "../../Cards/topfive/top5";
import Planed from "../../Cards/plans/plans";
import PageView from "../../section2/section";
const Container = styled.main`
  overflow: hidden;
  display: grid;

  .scene {
    height: 100vh;
    img {
      display: block;
      width: 60%;
      margin: auto;
    }
  }
`;

/*
  TODO: creat a custom react carousel :D
*/

const Home = () => {
  return (
    <Container>
      <Section color="space">
        <img
          src={nameIcon}
          alt=""
          style={{ zIndex: 2, width: "80%", display: "block", margin: "auto" }}
        />
        <RenderBurger />
      </Section>

      <PageView bgcolor={colors.bggrey}>
        <Slide bottom>
          <About />
        </Slide>
      </PageView>
      <PageView bgcolor={colors.bggrey}>
        <Slide bottom>
          <Top5 />
        </Slide>
      </PageView>
      <PageView bgcolor={colors.bggrey}>
        <Slide bottom>
          <News />
        </Slide>
      </PageView>
      <PageView bgcolor={colors.bggrey}>
        <Slide bottom>
          <Planed />
        </Slide>
      </PageView>

      <Section color="purple">
        <Card color="orange">
          <h3>המבורגרים של השבוע או משהו</h3>
        </Card>
        <Honorable
          name="susu"
          location="Rishon Le ztion"
          color="orange"
          scoop="Burger 1"
          image={burger001}
          alt=""
        />
        <Honorable
          name="susu"
          location="Rishon Le ztion"
          color="blue"
          scoop="Burger 2"
          image={burger002}
          alt=""
        />
        <Honorable
          name="susu"
          location="Rishon Le ztion"
          color="orange"
          scoop="Burger 3"
          image={burger003}
          alt=""
        />
      </Section>

      {/* סקשן של איתי של מה שהוא אכל  */}
    </Container>
  );
};

export default Home;
