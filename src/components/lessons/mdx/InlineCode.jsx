import styled from "styled-components";

const StyledInlineCode = styled.code`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  display: inline-block;
  /* line-height: 28px; */
  color: ${({ theme }) => theme.colors.textColor};
  border: 0.05em solid ${({ theme }) => theme.colors.textColor};
  border-radius: 3px;
  padding: 0 0.2em;
  vertical-align: bottom;
`;

export default function InlineCode(props) {
  return <StyledInlineCode {...props} />;
}