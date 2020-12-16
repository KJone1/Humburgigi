import Editor from "../../editor/Editor";
import { Section } from "../../section/Section";
import { Card, PageInfo } from "../../section/cards/Cards";
import questionMark from "../../../resorces/icons/question-mark.svg";
import styled from "styled-components";

const Container = styled.div`
  > div {
    background-color: rgba(200, 200, 200, 0.5);
    margin-top: 1em;
  }

  #info {
    display: flex;
    flex-direction: row;
    max-width: var(--nav-img-sz);
    max-height: var(--nav-img-sz);
    overflow: hidden;
    transition: all 300ms ease-in-out;

    background-color: var(--complementary-color);
    border: var(--complementary-second-color) 5px solid;
    img {
      width: var(--nav-img-sz);
    }

    :hover {
      max-width: 1000000px;
      max-height: 1000000px;
    }
  }
`;

const SendReview = () => {
  return (
    <Container className="hr">
      <Section isCol={true} color="blue">
        <PageInfo
          heading="כתיבת מאמר"
          info=" כאן רושמים את כל הדברים החמודים על העמוד"
        />

        <Card isDymHeight={true} color="orange">
          <h3>כאן ניתן לכתוב מאמר</h3>
          <span />
          <div id="info">
            <img src={questionMark} alt="help" />
            <p>
              יש כמה אפשרויות כדי להשתמש בכותב פוסטים (תמיד אפשר להוסיף): <br />
              -כותרת <br /> -לינק <br />
              -תמונה
            </p>
          </div>
          <Editor />
        </Card>
      </Section>
    </Container>
  );
};

export default SendReview;
