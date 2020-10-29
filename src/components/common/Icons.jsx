import styled from "styled-components";
import { ReactComponent as ReactLogoSvg } from "assets/icons/react.svg";
import { ReactComponent as JsLogoSvg } from "assets/icons/js.svg";
import { ReactComponent as HtmlLogoSvg } from "assets/icons/html.svg";

const StyledHtmlLogoSvg = styled(HtmlLogoSvg)`
  fill: ${({ theme }) => theme.colors.orange};
  width: 75px;
  height: 75px;
`;

const StyledHtmlLogoContainer = styled.figure`
  color: ${({ theme }) => theme.colors.orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin: 0;
`;

export const HtmlLogo = props => (
  <StyledHtmlLogoContainer {...props}>
    <figcaption>HTML</figcaption>
    <StyledHtmlLogoSvg />
  </StyledHtmlLogoContainer>
);

export const JsLogo = styled(JsLogoSvg)`
  fill: ${({ theme }) => theme.colors.yellow};
  width: 75px;
  height: 75px;
`;

export const ReactLogo = styled(ReactLogoSvg)`
  fill: ${({ theme }) => theme.colors.blue};
  width: 100px;
  height: 100px;
`;
