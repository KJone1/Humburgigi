import React from "react";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";

export default function Editor() {
  return (
      <EditorJs tools={EDITOR_JS_TOOLS} />
  );
}
