import styled from "styled-components";
import Logo from "components/Logo";
import { Link } from "gatsby";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import { MDXProvider } from "@mdx-js/react";
import components from "components/lessons/mdx";
import Layout from "../components/layout";
import RevealProvider from "components/lessons/reveal/RevealProvider.jsx";
import { ReactComponent as HtmlColoredSvg } from "assets/icons/html5-colored.svg";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);

const StyledHtmlColoredSvg = styled(HtmlColoredSvg)`
  position: absolute;
  right: 0;
  opacity: 0.7;
  z-index: 0;
  max-height: 100%;
  width: 50%;
  top: 50%;
  transform: translateY(-50%) rotate(-10deg);
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  width: 250px;
  fill: ${({ theme }) => theme.colors.textColor};
  padding: 0 10px;
  opacity: 0.5;
  transform: translateX(-50%);
`;

const RevealViewport = styled.div`
  height: 100vh;
  position: relative;
`;

const Gradient = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transform: rotate(-180deg);
  background: linear-gradient(
    180deg,
    #1d1f23 19.93%,
    rgba(29, 31, 35, 0) 92.7%
  );
  pointer-events: none;
`;

const LessonTemplate = ({ children }) => {
  return (
    <RevealProvider>
      <Layout>
        <MDXProvider components={components}>
          <StyledHtmlColoredSvg />
          <Gradient />
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
