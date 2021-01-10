import { ReactComponent as HtmlColoredSvg } from "assets/icons/html5-colored.svg";
import styled from "styled-components";

const StyledHtmlColoredSvg = styled(HtmlColoredSvg)`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.7;
  transform: rotate(-10deg);
`;

const StyledSection = styled.section`
  h3 {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 0.01em;
  }

  h1 {
    font-size: 3.5rem;
    font-family: "Source Code Pro", monospace;
  }

  hr {
    width: 90px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.textColor};
  }

`;



export default function FirstSection({ backgroundImg, children }) {
  return (
    <StyledSection
      data-background-image={backgroundImg}
      data-background-size="cover"
      data-background-position="top left"
      data-background-opacity="0.1"
    >
        <StyledHtmlColoredSvg height="50vh" />
        {children}
    </StyledSection>
  );
}
