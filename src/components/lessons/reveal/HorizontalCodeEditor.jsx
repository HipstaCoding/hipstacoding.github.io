import styled from "styled-components";
import { useState } from "react";
import CodeEditor from "../code-editor/CodeEditor";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultContainer = styled.div`
  height: 1px;
  flex: 1 1 auto;
`;

export default function HorizontalCodeEditor({ source, ...props }) {
  const [code, setCode] = useState(source);
  const resultPlaceholder = "* Результат появится тут *";

  return (
    <EditorContainer className="r-stretch">
      <CodeEditor {...props} value={code} onChange={setCode} />
      <ResultContainer
        dangerouslySetInnerHTML={{ __html: code || resultPlaceholder }}
      />
    </EditorContainer>
  );
}
