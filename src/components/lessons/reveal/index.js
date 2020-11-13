import styled from "styled-components";

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

export { default as HorizontalCodeEditor } from "./HorizontalCodeEditor";
