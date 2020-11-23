import styled from "styled-components";
import { ReactComponent as ReactLogoSvg } from "assets/icons/react.svg";
import { ReactComponent as JsLogoSvg } from "assets/icons/js.svg";
import { ReactComponent as HtmlLogoSvg } from "assets/icons/html.svg";
import { ReactComponent as VSCodeSvg } from "assets/icons/vscode.svg";
import { ReactComponent as ChromeSvg } from "assets/icons/chrome.svg";
import { ImgIcon } from "components/lessons/reveal";

const StyledHtmlLogoSvg = styled(HtmlLogoSvg)`
  fill: ${({ theme }) => theme.colors.orange};
  width: auto;
  height: 100%;
`;

const StyledHtmlLogoContainer = styled.figure`
  color: ${({ theme }) => theme.colors.orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-size: ${props => `calc(${props.height} / 5)`};
  height: ${props => props.height || "100px"};
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

export const VSCodeLogo = props => <ImgIcon {...props} as={VSCodeSvg} />;
export const ChromeLogo = props => <ImgIcon {...props} as={ChromeSvg} />;

export default {
  StyledHtmlLogoSvg,
  StyledHtmlLogoContainer,
  HtmlLogo,
  JsLogo,
  ReactLogo,
  VSCodeLogo,
  ChromeLogo
}