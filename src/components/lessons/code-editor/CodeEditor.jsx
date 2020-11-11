import styled from "styled-components";
import hljs from "highlight.js/lib/core";

const Textarea = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  background-color: transparent;
  font: inherit;
  font-family: "Consolas", monospace;
  padding: 15px 20px;
  overflow: hidden;
  outline: none;
  border: none;
  resize: none;
  caret-color: #383a42;
`;

const Container = styled.div`
  position: relative;
`;

export default function CodeEditor({ value, onChange, ...props }) {
  const code = hljs.highlight("xml", value).value + "\n";

  return (
    <Container>
      <pre>
        <code
          data-noescape
          {...props}
          dangerouslySetInnerHTML={{ __html: code }}
        ></code>
        <Textarea value={value} onChange={e => onChange(e.target.value)} />
      </pre>
    </Container>
  );
}
