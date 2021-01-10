import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import { MDXProvider } from "@mdx-js/react";
import components from "components/lessons/mdx";
import Layout from "../components/layout";
import RevealProvider from "components/lessons/reveal/RevealProvider";
import RevealView from "components/lessons/reveal/RevealView";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);

const LessonTemplate = ({ children }) => {
  return (
    <RevealProvider>
      <Layout>
        <MDXProvider components={components}>
          <RevealView>{children}</RevealView>
        </MDXProvider>
      </Layout>
    </RevealProvider>
  );
};

export default LessonTemplate;
