import React, { useEffect } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { Link } from "gatsby";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";

import "reveal.js/dist/reveal.css";
import "../lib/reveal-theme/atom-one-dark.css";
import "../lib/reveal-theme/source/hipsta.scss";

hljs.registerLanguage("xml", xml);

const StyledLogo = styled(Logo)`
  position: absolute;
  bottom: 20px;
  left: 40px;
  width: 150px;
  background-color: white;
  padding: 0 10px;
`;

const RevealViewport = styled.div`
  height: 100vh;
  position: relative;
`;

const LessonTemplate = ({ children }) => {
  useEffect(() => {
    const deck = new Reveal({
      overview: true,
      mouseWheel: true,
      hash: true,
      history: false,
      plugins: [Markdown, Highlight],
    });
    deck.initialize();
  }, []);
  return (
    <div>
      <RevealViewport id="reveal" className="reveal">
        {children}
      </RevealViewport>
      <Link to="/">
        <StyledLogo />
      </Link>
    </div>
  );
};

export default LessonTemplate;
