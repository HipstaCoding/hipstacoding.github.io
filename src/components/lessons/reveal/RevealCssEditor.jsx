import styled from "styled-components";
import { useState } from "react";
import RevealCodeEditor from "./RevealCodeEditor";

const EditorContainer = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  pre {
    height: 100%;
    width: 100%;
    margin: 0;
    box-shadow: none;
  }

  pre code {
    border-radius: 0;
  }

  iframe {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    background-color: #fafafa;
    border-radius: none;
    border-left: 3px solid ${({ theme }) => theme.colors.backgroundPrimary};
  }
`;

const HtmlCodeEditor = styled.pre`
  grid-column: 1 / 3;
  border-bottom: 3px solid ${({ theme }) => theme.colors.backgroundPrimary};
`;

function getHtml(html, css) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    ${css}
    html {
      font-size: 24px;
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
}

export default function RevealHtmlCssEditor({ css3, html, ...props }) {
  const [cssValue, setCss] = useState(css3);

  const srcdoc = getHtml(html, cssValue);

  return (
    <EditorContainer className="r-stretch editor">
      <HtmlCodeEditor>
        <code className="language-html">{html}</code>
      </HtmlCodeEditor>
      <RevealCodeEditor
        {...props}
        language="css"
        value={cssValue}
        onChange={setCss}
      />
      <iframe
        srcDoc={srcdoc}
        frameBorder="0"
        style={{ overflow: "hidden", height: "100%", width: "100%" }}
        height="100%"
        width="100%"
      />
    </EditorContainer>
  );
}
