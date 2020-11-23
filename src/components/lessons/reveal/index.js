import styled from "styled-components";
import { pickLine } from "./utils";
import Code from "./RevealCode";
import HorizontalCodeEditor from "./HorizontalCodeEditor";

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

export const Fragment = ({ className = "fragment", children, ...props }) => {
  if (className) className += " fragment";
  return <children.type {...children.props} {...props} className={className} />;
};

export const AnimatedCode = ({
  children,
  language,
  lines,
  numbers = true,
  className = "",
  ...props
}) => {
  if (language) className += `language-${language}`;
  if (lines) children = pickLine(children, lines);
  return (
    <pre {...props}>
      <Code className={className} data-line-numbers={numbers}>
        {children}
      </Code>
    </pre>
  );
};

export { default as HorizontalCodeEditor } from "./HorizontalCodeEditor";

export default {
  Image,
  Relative,
  ImgIcon,
  Fragment,
  AnimatedCode,
  HorizontalCodeEditor,
};
