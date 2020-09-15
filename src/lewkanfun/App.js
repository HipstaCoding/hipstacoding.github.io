import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Player } from "./components/player";
import {
  MAX_MEDIA_WIDTH,
  CIRCLE_DIAMETER,
  MIN_CIRCLE_DIAMETER,
} from "./config";
import { SpeakerPlayer } from "./components/SpeakerPlayer";
import { ReactComponent as Spinner } from "./images/spinner.svg";
import { ReactComponent as Play } from "./images/play.svg";
import { ReactComponent as Pause } from "./images/pause.svg";
import logo from "./images/logo.svg";
import space from "./images/space.gif";
import Helmet from "react-helmet";

const TextLogo = styled.img`
  max-width: 95%;
  height: 100%;
  width: auto;
`;

const Background = styled.div`
  background-color: black;
  color: white;
  font-family: "Comic Sans MS", "Marker Felt", sans-serif;
`;

const FirstScreen = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-image: url(${space});
  background-size: cover;
  background-position: 50% 50%;
`;

const Side = styled.div`
  width: 200px;
  padding: 20px;
  text-align: center;
  flex: 0 1 auto;
  font-size: 32px;

  @media (max-width: ${MAX_MEDIA_WIDTH}px) {
    order: 3;
    flex: 1 1 auto;
    font-size: 24px;

    &:first-of-type {
      order: 1;
    }
  }
`;

const Link = styled.a`
  color: magenta;
`;

const Center = styled.div`
  flex: 0 1 auto;
  min-width: ${CIRCLE_DIAMETER}px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${MAX_MEDIA_WIDTH}px) {
    min-width: ${MIN_CIRCLE_DIAMETER}px;

    height: 100%;
    order: 1;
    width: 100%;
  }
`;

const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`;

const FusionContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 24px;
  padding: 20px;
`;

const Text = styled.div`
  margin: 20px auto;
  max-width: 800px;

  @media (max-width: ${MAX_MEDIA_WIDTH}px) {
    width: 100%;
    font-size: 14px;
  }
`;

const PlayerButton = ({ player }) => {
  const [status, setStatus] = useState("pause");

  useEffect(() => {
    player.setContext(new (window.AudioContext || window.webkitAudioContext)());
    player.context.addEventListener("play", () => setStatus("play"));
    player.context.addEventListener("pause", () => setStatus("pause"));
    player.context.addEventListener("loading", () => setStatus("loading"));
  }, []);

  switch (status) {
    case "play":
      return <Pause />;
    case "pause":
      return <Play />;
    default:
      return <Spinner />;
  }
};

const App = () => {
  const [player] = useState(new Player());
  return (
    <Background>
      <Helmet>
        <link rel="preload" href={space} />
      </Helmet>
      <FirstScreen>
        <Side>
          starts:
          <p>25.01.2020</p>
          <p>23:00</p>
        </Side>
        <Center>
          <SpeakerPlayer player={player}>
            <TextLogo src={logo} />
            <CenterContainer>
              <PlayerButton player={player} />
            </CenterContainer>
          </SpeakerPlayer>
        </Center>
        <Side>
          ends:
          <p>26.01.2020</p>
          <p>06:00</p>
        </Side>
      </FirstScreen>
      <FusionContainer>
        <Text>
          Фьюжн, фьюжен (от англ. fusion, «сплав») — термин, который может
          входить в название стилей и направлений в искусстве, архитектуре,
          дизайне, музыке, характеризующихся «сочетанием несочетаемого», то есть
          объединяющих в себе совершенно разные идеи из, казалось бы,
          несовместимых стилей, не теряя при этом целостности и гармонии.
        </Text>
        <Text>
          <h2>Тебя ждет:</h2>
          <ul>
            <li>Unique friendly party experience</li>
            <li>True underground electronic music</li>
            <li>Light show</li>
            <li>Magic Bar</li>
            <li>Meet new people</li>
            <li>Cool place in the Kyiv center</li>
            <li>A lot of fun</li>
          </ul>
        </Text>
        <Text>
          <h2>Line Up:</h2>
          <p>Nbomb (Psychedelic/Industrial)</p>
          <p>KADILLLOVE (Techno)</p>
          <p>CREE PPAK (House)</p>
          <p>TBA</p>
        </Text>
        <Text>
          <h2>Info:</h2>
          Буду рад видеть тебя на этой вечеринке. Если ты заинтересован(а), пиши
          за подробностями{" "}
          <Link target="_blank" href="https://t.me/xlwknx">
            мне в телеграмме
          </Link>
          . Денег за вход не прошу, но буду рад подарку или free donation в фонд
          развития сильных движух. Для того, чтобы попасть на вечеринку, нужно
          обязательно быть{" "}
          <Link
            target="_blank"
            href="https://t.me/joinchat/AAAAAFBg41eVsQUQAR6JrQ"
          >
            в канале
          </Link>
          ! <b>Поспеши</b>, количество мест <b>ограничено</b>!
        </Text>
      </FusionContainer>
    </Background>
  );
};

export default App;
