import { screenSizes } from "lib/screenSizes";
import styled from "styled-components";
import heroImagePng from "assets/images/hero-image.png";
import AtomImage from "components/AtomImage";
import { ReactComponent as ReactLogo } from "assets/icons/react.svg";
import { ReactComponent as JsLogo } from "assets/icons/js.svg";
import { ReactComponent as HtmlLogo } from "assets/icons/html.svg";
import Header from "components/common/Header";

const HeaderLink = styled.a`
  padding: 30px;
  color: white;
  display: inline-block;
`;

const Container = styled.main`
  padding: 20px;
`

const CourseTitle = styled.h1`
  font-size: 72px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: white;

  @media ${screenSizes.xs} {
    font-size: 48px;
  }

  @media ${screenSizes.xl} {
    padding-right: 300px;
  }
`;

const CourseSubtitle = styled.h6`
  font-size: 27px;
  font-family: "Montserrat", sans-serif;
  color: white;
  letter-spacing: 0.05em;
  margin-top: 20px;

  @media ${screenSizes.xl} {
    width: 50%;
  }
`;

const Banner = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  min-height: calc(100vh - 120px);

  @media ${screenSizes.sm} {
    padding: 50px 0;
  }
`;

const HeroImage = styled(AtomImage)`
  position: absolute;
  top: 50px;
  right: 0;
  height: calc(100vh - 120px - 100px);
  width: calc(100vh - 120px - 100px);
  max-width: 400px;
  max-height: 400px;

  @media ${screenSizes.xs} {
    position: relative;
    top: 0;
    margin: 50px 0;
  }
`;


const StyledJsLogo = props => {
  return <JsLogo width="75px" height="75px" {...props} />;
};

const StyledReactLogo = props => {
  return <ReactLogo width="100px" height="100px" {...props} />;
};

const StyledHtmlLogo = props => {
  return <HtmlLogo width="100px" height="100px" {...props} />;
};

export default function IndexPageContent() {
  return (
    <>
      <Header>
        <HeaderLink href="#">Курс</HeaderLink>
        <HeaderLink href="#">Цены</HeaderLink>
        <HeaderLink href="#">Мастер классы</HeaderLink>
        <HeaderLink href="#">Контакты</HeaderLink>
      </Header>
      <Container>
        <Banner>
          <CourseTitle>КУРС FRONT-END РАЗРАБОТКИ С&nbsp;НУЛЯ.</CourseTitle>
          <HeroImage
            src={heroImagePng}
            electrons={[StyledJsLogo, StyledReactLogo, StyledHtmlLogo]}
          />
          <CourseSubtitle>
            Научим делать сногшибательные сайты и зарабатывать много денег!*
          </CourseSubtitle>
        </Banner>
      </Container>
    </>
  );
}
