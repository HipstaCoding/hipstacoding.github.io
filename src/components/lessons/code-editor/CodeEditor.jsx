import styled from "styled-components";
import hljs from "highlight.js/lib/core";
import { useRef, useEffect, useState } from "react";

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
  overflow: auto;
  outline: none;
  border: none;
  resize: none;
  caret-color: #383a42;
  white-space: pre;
  word-wrap: initial;
`;

const Container = styled.div`
  position: relative;
`;

export default function CodeEditor({
  value = "",
  placeholder,
  onChange,
  ...props
}) {
  const [selected, setSelected] = useState(value.length);
  const code = hljs.highlight("xml", value).value + "\n";
  const textareaRef = useRef();
  const codeRef = useRef();

  useEffect(() => {
    setSelected(selected);
  }, [value]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(selected, selected);
    }
  }, [selected]);

  const onTabClick = e => {
    if (e.keyCode === 9 /* Tab */) {
      e.preventDefault();
      if (onChange) {
        const start = textareaRef.current.selectionStart;
        const end = textareaRef.current.selectionEnd;
        // set textarea value to: text before caret + tab + text after caret
        const newValue = `${value.substring(0, start)}  ${value.substring(
          end
        )}`;
        onChange(newValue);
        setSelected(start + 2);
      }
    }
  };

  const onCodeScroll = e =>
    codeRef.current.scrollTo(e.target.scrollLeft, e.target.scrollTop);

  return (
    <Container {...props}>
      <pre>
        <code
          data-noescape
          ref={codeRef}
          dangerouslySetInnerHTML={{ __html: code }}
        ></code>
        <Textarea
          onKeyDown={onTabClick}
          value={value}
          onChange={e => onChange(e.target.value)}
          ref={textareaRef}
          onScroll={onCodeScroll}
          placeholder={placeholder}
        />
      </pre>
    </Container>
  );
}
