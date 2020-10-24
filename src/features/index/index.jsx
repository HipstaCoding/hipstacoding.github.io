import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { mediaQuery } from "lib/MediaQuery";
import styled from "styled-components";
import heroImagePng from "assets/images/hero-image.png";
import AtomImage from "components/AtomImage";

const StyledLogo = styled(Logo)`
  width: 140px;
  fill: white;
`;

const Header = styled.header`
  min-height: 120px;
  width: 100%;
  background-color: #1d1f23;
  height: 1px;
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const HeaderLink = styled.a`
  padding: 30px;
  height: 100%;
  color: white;
  font-family: "Montserrat", sans-serif;
`;

const CourseTitle = styled.h1`
  font-size: 72px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;

  ${mediaQuery.query(mediaQuery.sizes.xl)`
    padding-right: 300px;
  `};
`;

const CourseSubtitle = styled.h6`
  font-size: 27px;
  font-family: "Montserrat", sans-serif;
  color: white;
  letter-spacing: 0.05em;
  margin-top: 20px;

  ${mediaQuery.query(mediaQuery.sizes.xl)`
    width: 50%;
  `};
`;

const Banner = styled.div`
  padding: 50px 0;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  min-height: calc(100vh - 120px);
`;

const LogoImage = styled(AtomImage)`
  position: absolute;
  right: 0;
  height: calc(100vh - 120px - 100px);
  width: calc(100vh - 120px - 100px);
  max-width: 400px;
  max-height: 400px;
`;

const JsLogoContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  width: 100px;
  height: 100px;
  background-color: yellow;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 50%;
  font-size: 54px;
  padding-right: 0.25em;
  padding-bottom: 0.25em;
  
  /* padding-bottom: 25%;
  padding-right: 25%; */
`;

const JsLogo = (props) => {
  return <JsLogoContainer {...props}>JS</JsLogoContainer>;
};

export default function IndexPageContent() {
  return (
    <>
      <Header>
        <Navigation>
          <div>
            <StyledLogo />
          </div>
          <div>
            <HeaderLink href="#">Курс</HeaderLink>
            <HeaderLink href="#">Цены</HeaderLink>
            <HeaderLink href="#">Мастер классы</HeaderLink>
            <HeaderLink href="#">Контакты</HeaderLink>
          </div>
        </Navigation>
      </Header>
      <main>
        <Banner>
          <LogoImage src={heroImagePng} electrons={[JsLogo, JsLogo, JsLogo]} />
          <CourseTitle>КУРС FRONT-END РАЗРАБОТКИ С&nbsp;НУЛЯ.</CourseTitle>
          <CourseSubtitle>
            Научим делать сногшибательные сайты и зарабатывать много денег!*
          </CourseSubtitle>
        </Banner>
      </main>
    </>
  );
}
