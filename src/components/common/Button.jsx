import styled from "styled-components";
import { lighten } from "polished";
import { mediaQueries } from "lib/screenSizes";

const StyledButton = styled.button`
  ${({ theme }) => theme.fonts.mainFont(25)};
  background-color: ${({ theme }) => theme.colors.controlPrimaryColor};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 12px;
  height: 70px;
  padding: 0 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) =>
      lighten(0.1, theme.colors.controlPrimaryColor)};
  }

  @media ${mediaQueries.xs} {
    padding: 0 50px;
    width: 100%;
  }
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
