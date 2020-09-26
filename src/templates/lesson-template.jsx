import React, { useEffect } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import styled from "styled-components";

import "reveal.js/dist/reveal.css";
import "../lib/reveal-theme/atom-one-dark.css";
import "../lib/reveal-theme/source/hipsta.scss";

const RevealViewport = styled.div`
  height: 100vh;
`;

const LessonTemplate = ({ children }) => {
  useEffect(() => {
    const deck = new Reveal({
      overview: true,
      mouseWheel: true,
      plugins: [Markdown, Highlight],
    });
    deck.initialize();
  }, []);
  return (
    <RevealViewport id="reveal" className="reveal">
      {children}
    </RevealViewport>
  );
};

export default LessonTemplate;
