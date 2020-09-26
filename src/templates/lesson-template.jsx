import React, { useEffect } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { Link } from "gatsby";

import "reveal.js/dist/reveal.css";
import "../lib/reveal-theme/atom-one-dark.css";
import "../lib/reveal-theme/source/hipsta.scss";

const StyledLogo = styled(Logo)`
  position: absolute;
  bottom: 20px;
  left: 40px;
  width: 400px;
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
