import { mediaQueries } from "lib/screenSizes";
import styled from "styled-components";
import heroImagePng from "assets/images/hero-image.png";
import AtomImage from "components/AtomImage";
import { ReactComponent as ReactLogo } from "assets/icons/react.svg";
import { ReactComponent as JsLogo } from "assets/icons/js.svg";
import { ReactComponent as HtmlLogo } from "assets/icons/html.svg";
import Header from "components/common/Header";
import Button from "components/common/Button";
import Container from "components/common/Container";
import { transparentize } from "polished";
import { ReactComponent as RemoteAccessIcon } from "assets/icons/remote-access.svg";
import { ReactComponent as BuyIcon } from "assets/icons/buy.svg";
import { ReactComponent as GitIcon } from "assets/icons/git.svg";
import { ReactComponent as TeamworkIcon } from "assets/icons/brainstorming.svg";
import { ReactComponent as AnalyticsIcon } from "assets/icons/analytics.svg";
import { ReactComponent as OpenIcon } from "assets/icons/open-book.svg";

const HeaderLink = styled.a`
  padding: 30px;
  color: white;
  display: inline-block;
`;

const CourseTitle = styled.h1`
  font-size: 72px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: white;

  @media ${mediaQueries.xs} {
    font-size: 48px;
  }

  @media ${mediaQueries.sm} {
    font-size: 48px;
    padding-right: 260px;
  }

  @media ${mediaQueries.md} {
    font-size: 72px;
  }

  @media ${mediaQueries.lg} {
    padding-right: 500px;
  }
`;

const CourseSubtitle = styled.h6`
  font-size: 27px;
  font-family: "Montserrat", sans-serif;
  color: white;
  letter-spacing: 0.05em;
  margin-top: 20px;

  @media ${mediaQueries.xl} {
    width: 50%;
  }
`;

const Banner = styled.div`
  position: relative;
  min-height: 580px;
  height: 100%;

  @media ${mediaQueries.sm} {
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

  @media ${mediaQueries.xs} {
    position: relative;
    top: 0;
    margin: 50px auto;
  }
`;

const SubscribeButton = styled(Button)`
  margin-top: 50px;
`;

const StagesContainer = styled.section`
  margin-top: 150px;
`;

const StagesTitle = styled.h2`
  ${({ theme }) => theme.fonts.mainFont(64, 800)};
  color: ${({ theme }) => theme.colors.textSecondaryColor};
`;

const StagesRow = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 50px;
  align-items: center;
  justify-content: center;

  @media ${mediaQueries.xs} {
    grid-template-columns: repeat(auto-fit, minmax(330px, 420px));
  }
`;

const StageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: 0px 28px 100px 17px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  position: relative;
  min-height: 516px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 100px 30px 30px;
`;

const StageNumber = styled.div`
  ${({ theme }) => theme.fonts.monoFont(56, 700)};
`;

const HighlightText = styled.span`
  color: ${({ theme, color }) => theme.colors[color]};
`;

const StyledHtmlLogo = props => {
  return <HtmlLogo width="100px" height="100px" {...props} />;
};

const StyledJsLogo = props => {
  return <JsLogo width="75px" height="75px" {...props} />;
};

const StyledReactLogo = props => {
  return <ReactLogo width="100px" height="100px" {...props} />;
};

const StageLogo = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StageDescription = styled.span`
  ${({ theme }) => theme.fonts.mainFont(24, 600)};
  text-align: center;

  & > div {
    border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
`;

const StageList = styled.ul`
  margin: 0;
  padding: 10px 0;
  list-style-type: none;

  & > li {
    margin: 10px 0;
  }

  & > li:before {
    content: "-";
    padding: 0 5px;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 50px;
  justify-content: center;

  @media ${mediaQueries.xs} {
    grid-gap: 20px;
  }
`;

const FeatureContainer = styled.ul`
  list-style: none;
  border-radius: 25px;
  background-color: ${({ color, theme }) =>
    transparentize(0.5, theme.colors[color])};
  padding: 30px 60px;

  li {
    margin: 30px 0%;
  }
`;

const ProfitContainer = styled.section`
  margin-top: 50px;
`;

const ProfitIcon = styled.svg`
  fill: white;
  width: 100px;
  height: auto;
  margin-bottom: 50px;
`;

const ProfitList = styled.ul`
  display: grid;
  margin: 60px 0;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 50px;
`;

const ProfitContent = styled.li`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

const FooterLink = styled.div`
  text-align: right;
`;

const NoWarranties = styled.div`
  ${({ theme }) => theme.fonts.mainFont(18)};
  margin-bottom: 50px;
`;

export default function IndexPageContent() {
  return (
    <>
      <Header>
        <HeaderLink href="#subscribe">Запись</HeaderLink>
        <HeaderLink href="#stages">Этапы</HeaderLink>
        <HeaderLink href="#about">О Курсе</HeaderLink>
        <HeaderLink href="#profits">Почему мы</HeaderLink>
      </Header>
      <Container as="main">
        <Banner id="subscribe">
          <CourseTitle>КУРС FRONT-END РАЗРАБОТКИ С&nbsp;НУЛЯ.</CourseTitle>
          <HeroImage
            src={heroImagePng}
            electrons={[StyledJsLogo, StyledReactLogo, StyledHtmlLogo]}
          />
          <CourseSubtitle>
            Научим делать сногшибательные сайты и зарабатывать много денег!
            <a href="#no-warranties">*</a>
          </CourseSubtitle>
          <SubscribeButton
            forwardedAs="a"
            target="_blank"
            href="https://t.me/hipstacodingbot"
          >
            Записаться
          </SubscribeButton>
        </Banner>
        <StagesContainer as="section">
          <StagesTitle id="stages">Этапы</StagesTitle>
          <StagesRow>
            <StageContainer>
              <StageLogo as={StyledHtmlLogo} />
              <StageDescription>
                <StageNumber>01</StageNumber>
                <div>
                  Верстаем с <HighlightText color="orange">HTML5</HighlightText>{" "}
                  и <HighlightText color="orange">CSS3</HighlightText>
                </div>
                <div>Кол-во занятий: 10</div>
                <div>Старт: Декабрь 2020</div>
                Результат:
                <StageList>
                  <li>
                    Собвственный webсайт-портфолио на чистом{" "}
                    <HighlightText color="orange">HTML5</HighlightText> и{" "}
                    <HighlightText color="orange">CSS3</HighlightText>
                  </li>
                  <li>
                    Подработка до 300$<a href="#no-warranties">*</a>
                  </li>
                </StageList>
              </StageDescription>
            </StageContainer>
            <StageContainer>
              <StageLogo as={StyledJsLogo} />
              <StageDescription>
                <StageNumber>02</StageNumber>
                <div>
                  Учимся кодить на{" "}
                  <HighlightText color="yellow">JavaScript</HighlightText>
                </div>
                <div>Кол-во занятий: 10</div>
                <div>Старт: Январь 2021</div>
                Результат:
                <StageList>
                  <li>
                    Прокачанный webсайт-портфолио с помощью
                    <HighlightText color="yellow"> JavaScript</HighlightText>.
                  </li>
                  <li>
                    Работа ~ 300$ - 500$<a href="#no-warranties">*</a>
                  </li>
                </StageList>
              </StageDescription>
            </StageContainer>
            <StageContainer>
              <StageLogo as={StyledReactLogo} />
              <StageDescription>
                <StageNumber>03</StageNumber>
                <div>
                  Решаем сложные задачи легко с{" "}
                  <HighlightText color="blue">React</HighlightText>
                </div>
                <div>Кол-во занятий: 10</div>
                <div>Старт: Февраль 2021</div>
                Результат:
                <StageList>
                  <li>
                    Собственный блог с использованием
                    <HighlightText color="blue"> React</HighlightText> и его
                    экосистемы!
                  </li>
                  <li>
                    Работа 500$+<a href="#no-warranties">*</a>
                  </li>
                </StageList>
              </StageDescription>
            </StageContainer>
          </StagesRow>
        </StagesContainer>
        <ProfitContainer id="about">
          <StagesTitle>О курсе</StagesTitle>
          <p>
            Front-End разработка - одно из самых перспективных направлений в
            программировании, а недостаток квалифицированных кадров в отрасли
            положительно сказывается на заработной плате Front-End специалистов,
            рыночек порешал, так сказать. С вашими стараниями за три месяца вы
            можете стать Front-End junior разработчиком, а на финале первого
            этапа сможете уже искать работу. Финалом каждого из трех этапов
            будет собственного персонального webсайта! Это не только отличный
            способ выделяться на фоне остальных кандидатов на должность, но и
            отличный полигон для демонстрации своих способностей!
          </p>
          <FeaturesContainer>
            <FeatureContainer color="green">
              <h2>Плюсы Front End</h2>
              <li>
                <b>Низкий порог вхождения:</b> HTML учат еще в школе, а
                JavaScript один из лучших языков для обучения программированию.
              </li>
              <li>
                <b>Мгновенный фидбек:</b> в большинстве случаев вы сразу же
                видите результат своей работы на экране.
              </li>
              <li>
                <b>Много готовых решений и библиотек: </b> иногда код попросту
                писать не нужно, а задачу можно выполнить набором готовых
                решений и поехать домой пораньше.
              </li>
              <li>
                <b>Большой спектр от суперлегких до сверхсложных задач:</b>{" "}
                можно найти работу на любой вкус и бюджет.
              </li>
              <li>
                <b>Открытость</b>: Свою работу можно показать друзьям под
                чашечку латте со своего macbook pro в браузере safari.
              </li>
              <li>
                <b>Internet is everywhere:</b> можно разрабатывать под платформы
                от мобильных устройств до умных телевизоров!
              </li>
            </FeatureContainer>
            <FeatureContainer color="red">
              <h2>Минусы Front End</h2>
              <li>
                <b>Сложная экосистема фреймворков и инструментов</b> и не смотря
                на то, что разные компании используют разные инструменты, учить
                их все не нужно. Секрет в том, что нужно понимать как они
                работают, и мы это будем объяснять.
              </li>
              <li>
                <b>Не все библиотеки работают хорошо и качественно</b>, но мы
                научим вас в них разбираться, смотреть исходный код, а также
                избегать их там, где это возможно.
              </li>
              <li>
                <b>Монотонная работа</b> может попасться в виде бесконечной
                верстки или формошлепства. Большинство курсов затачивает
                учеников именно под эти задачи. Мы же постараемся научить вас
                большему используя игры и творческие задачи в процессе обучения.
              </li>
              <li>
                <b>Нужно учиться всегда.</b> Это касается любой отрасли
                программирования, но Front-End развивается стремительными
                темпами, поэтому мы научим вас следить за обновлениями и
                новостями отрасли.
              </li>
            </FeatureContainer>
          </FeaturesContainer>
        </ProfitContainer>
        <ProfitContainer id="profits">
          <StagesTitle>Почему мы</StagesTitle>
          <ProfitList>
            <ProfitContent>
              <ProfitIcon as={RemoteAccessIcon} />
              <h3>Гибкость</h3>
              <p>Уроки как offline так и online</p>
            </ProfitContent>
            <ProfitContent>
              <ProfitIcon as={BuyIcon} />
              <h3>Никаких предоплат</h3>
              <p>Оплата по факту в конце урока</p>
            </ProfitContent>
            <ProfitContent>
              <ProfitIcon as={GitIcon} />
              <h3>Реальные условия</h3>
              <p>Использование GitHub начиная с первого занятия</p>
            </ProfitContent>
            <ProfitContent>
              <ProfitIcon as={TeamworkIcon} />
              <h3>Командная работа</h3>
              <p>Научим вас смотреть чужой код и работать в команде</p>
            </ProfitContent>
            <ProfitContent>
              <ProfitIcon as={AnalyticsIcon} />
              <h3>Полезные лайфхаки</h3>
              <p>
                Научим тайменедженту, продуктивности и пользоваться гарячим
                клавишами
              </p>
            </ProfitContent>
            <ProfitContent>
              <ProfitIcon as={OpenIcon} />
              <h3>Открытый доступ</h3>
              <p>
                Все материалы доступны в качестве{" "}
                <a target="_blank" href="/lessons/html/01-html">
                  презентаций
                </a>{" "}
                на сайте
              </p>
            </ProfitContent>
          </ProfitList>
          <NoWarranties id="no-warranties">
            * Мы не гарантируем вам много денег и классную работу, как и не
            могут гарантировать любые{" "}
            <a
              href="https://ebanoe.it/tag/%d0%b3%d0%be%d0%b2%d0%bd%d0%be%d0%ba%d1%83%d1%80%d1%81%d1%8b/"
              target="_blank"
            >
              другие курсы
            </a>
            .
          </NoWarranties>
        </ProfitContainer>
      </Container>
      <Header>
        <FooterLink>
          Icons made by{" "}
          <a
            target="_blank"
            href="https://www.flaticon.com/authors/smalllikeart"
            title="smalllikeart"
          >
            smalllikeart
          </a>{" "}
          from{" "}
          <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </FooterLink>
        <FooterLink>
          Logo and design made by{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/okeydsgn/"
            title="Okey Instagram"
          >
            okeydsgn
          </a>{" "}
          from Odessa
        </FooterLink>
        <FooterLink>
          Courses and{" "}
          <a target="_blank" href="https://github.com/xlwknx" title="Lewkan">
            development{" "}
          </a>{" "}
          by
          <a
            target="_blank"
            href="https://www.instagram.com/tony_hawks_underground/"
            title="Lewkan Instagram"
          >
            {" "}
            lewkan
          </a>{" "}
          from Kyiv
        </FooterLink>
      </Header>
    </>
  );
}
