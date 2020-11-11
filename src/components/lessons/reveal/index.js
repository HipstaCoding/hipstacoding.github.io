import { useState } from "react";
import styled from "styled-components";
import CodeEditor from "../code-editor/CodeEditor";

export const Image = styled.img`
  width: auto;
  height: ${props => props.height};
  position: ${props => props.position};
  left: ${props => props.left};
`;

export const Relative = styled.div`
  position: relative;
  display: inline-block;
`;

export const ImgIcon = styled.img`
  height: 54px;
  display: inline-block;
  vertical-align: top;
  margin: 0 5px !important;
`;

export const HorizontalCodeEditor = ({ source }) => {
  const [code, setCode] = useState(source);

  return (
    <>
      <CodeEditor value={code} onChange={setCode} />
      <p dangerouslySetInnerHTML={{ __html: code }} />
    </>
  );
};
