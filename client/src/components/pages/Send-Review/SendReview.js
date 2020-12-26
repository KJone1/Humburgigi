import { useState } from "react";
import { Section } from "../../section/Section";
import { Card, PageInfo } from "../../section/cards/Cards";
import questionMark from "../../../resorces/icons/question-mark.svg";
import styled from "styled-components";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editor-tools";

import axios from "axios";
import config from "../../../config.json";

const Container = styled.div`
  text-align:center;

  button {
    display:block;
    margin: 0 auto;
    padding: 0.5em;
  }

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
  const [editorInstance, setEditorInstance] = useState({});

  const handleSave = async () => {
    const editorData = await editorInstance.save();

    //This create unusual behaviour
    axios.post(
      `${config.proxy}${config.review.post}`,
      { author: "itayBenGigush"
        ,burgerData: editorData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

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
          <EditorJs
            instanceRef={(instance) => setEditorInstance(instance)}
            tools={EDITOR_JS_TOOLS}
          />
          <button onClick={() => handleSave()}>שלח</button>
        </Card>
      </Section>
    </Container>
  );
};

export default SendReview;
