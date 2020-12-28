import styled from "styled-components";

const StyledInlineCode = styled.code`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  /* display: inline-block; */
  /* color: ${({ theme }) => theme.colors.green}; */
  /* border: 1px solid ${({ theme }) => theme.colors.backgroundPrimary}; */
  border-radius: 0.1em;
  padding: 0 0.2em;
  /* vertical-align: bottom; */
`;

export default function InlineCode(props) {
  return <StyledInlineCode {...props} />;
}
