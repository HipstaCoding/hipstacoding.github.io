import styled from "styled-components";
import { ReactComponent as ReactLogoSvg } from "assets/icons/react.svg";
import { ReactComponent as JsLogoSvg } from "assets/icons/js.svg";
import { ReactComponent as HtmlLogoSvg } from "assets/icons/html.svg";
import { ReactComponent as VSCodeSvg } from "assets/icons/vscode.svg";
import { ReactComponent as ChromeSvg } from "assets/icons/chrome.svg";
import { ReactComponent as EmmetSvg } from "assets/icons/emmet.svg";
import { ImgIcon } from "components/lessons/reveal";


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

export const HtmlLogo = styled(HtmlLogoSvg)`
  fill: ${({ theme }) => theme.colors.orange};
  width: 100px;
  height: 100px;
`;

const CssLogoContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  width: 230px;
  height: 230px;
  font-size: 50px;
  text-align: left;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 20px;
`;

export const CssLogo = props => (
  <CssLogoContainer {...props}>
    CSS <br /> is awesome
  </CssLogoContainer>
);

export const VSCodeLogo = props => <ImgIcon {...props} as={VSCodeSvg} />;
export const ChromeLogo = props => <ImgIcon {...props} as={ChromeSvg} />;
export const EmmetLogo = props => <ImgIcon {...props} as={EmmetSvg} />;

export default {
  HtmlLogo,
  JsLogo,
  ReactLogo,
  VSCodeLogo,
  ChromeLogo,
  CssLogo,
  EmmetLogo,
};
