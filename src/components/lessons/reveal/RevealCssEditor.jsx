import styled from "styled-components";
import { useState } from "react";
import RevealCodeEditor from "./RevealCodeEditor";
import RevealCode from "./RevealCode";

const EditorContainer = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: ${({ columns }) => `${columns[0]}% ${columns[1]}%`};
  grid-template-rows: ${({ rows }) => `${rows[0]}% ${rows[1]}%`};
  font-size: 0.75em;

  pre {
    height: 100%;
    width: 100%;
    margin: 0;
    box-shadow: none;
  }

  pre code {
    border-radius: 0;
    max-height: 100%;
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
    html {
      font-size: 24px;
      min-height: 100%;
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }

    html, body {
      min-height: 100%;
      height: 1px;
    }
     
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  </style>
  <style>
  ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
}

const isModule = x => typeof x === "object" && x.default;

export default function RevealHtmlCssEditor({
  css3,
  html,
  rows = [50, 50],
  columns = [50, 50],
  ...props
}) {
  const htmlString = isModule(html) ? html.default : html;
  const cssString = isModule(css3) ? css3.default : css3;

  const [cssValue, setCss] = useState(cssString, css3);

  const srcdoc = getHtml(htmlString, cssValue);

  return (
    <EditorContainer className="r-stretch editor" rows={rows} columns={columns}>
      <HtmlCodeEditor>
        <RevealCode className="language-html">{htmlString}</RevealCode>
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
