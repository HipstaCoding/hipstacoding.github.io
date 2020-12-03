import styled from "styled-components";
import Logo from "components/Logo";
import { Link } from "gatsby";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import { MDXProvider } from "@mdx-js/react";
import components from "components/lessons/mdx";
import Layout from "../components/layout";
import RevealProvider from "components/lessons/reveal/RevealProvider.jsx";

import "reveal.js/dist/reveal.css";
import "../lib/reveal-theme/atom-one-light.css";
import "../lib/reveal-theme/source/hipsta.scss";

hljs.registerLanguage("xml", xml);

const StyledLogo = styled(Logo)`
  position: absolute;
  bottom: 20px;
  left: 40px;
  width: 150px;
  fill: ${({ theme }) => theme.colors.textColor};
  padding: 0 10px;
`;

const RevealViewport = styled.div`
  height: 100vh;
  position: relative;
`;

const LessonTemplate = ({ children }) => {
  return (
    <RevealProvider>
      <Layout>
        <MDXProvider components={components}>
          <RevealViewport id="reveal" className="reveal">
            <div className="slides">{children}</div>
          </RevealViewport>
          <Link to="/">
            <StyledLogo />
          </Link>
        </MDXProvider>
      </Layout>
    </RevealProvider>
  );
};

export default LessonTemplate;
