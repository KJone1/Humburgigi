import Paragraph from "@editorjs/paragraph";

import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";

import Header from "@editorjs/header";

export const EDITOR_JS_TOOLS = {
  paragraph: Paragraph,
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: "http://localhost:5000/fetchUrl", // Your backend endpoint for url data fetching
    },
  },
  image: Image,
  header: Header,
};
