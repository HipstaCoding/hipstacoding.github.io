import React from "react";
import hljs from "highlight.js/lib/core";

export default function InlineCode({ children, language }) {
  const code = hljs.highlight("xml", children).value;

  return (
    <code className="hljs-inline" dangerouslySetInnerHTML={{ __html: code }} />
  );
}
