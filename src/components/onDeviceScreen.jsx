import React from "react";
import styled from "styled-components";
import macbook from "../images/macbook_bg.png";
import { useSpring, animated } from "react-spring";

const MIN_SCALE = 0.5;
const MAX_SCALE = 1;

const IMAGE_WIDTH = 1980;
const IMAGE_HEIGHT = 1173;

const SCREEN_WIDTH = 1619;
const SCREEN_HEIGHT = 1044;
const SCREEN_ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;

const IMAGE_TOP_PADDING = 25;
const IMAGE_BOTTOM_PADDING = 104;
const IMAGE_LEFT_PADDING = (IMAGE_WIDTH - SCREEN_WIDTH) / 2;

const Website = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  border: 1px dashed black;
`;

// const Background = styled.div`
//   background-image: url(${macbook});
// 	background-size: contain;
// 	background-repeat: no-repeat;
// 	padding: 20px 120px 80px;
// 	overflow: hidden;
// `;

const Background = styled.img`
  position: absolute;
  top: -25px;
  left: 50%; /* position the left edge of the element at the middle of the parent */

  transform: translateX(-50%) scale(${props => props.scale});
	transform-origin: 50% 0;
  object-fit: contain;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const Content = styled(animated.div)`
  /* width: ${SCREEN_WIDTH}px; */
	width: 100%;
  height: ${props => props.scale * SCREEN_HEIGHT}px;
  background-color: aqua;
  position: relative;
  /* overflow: ${({ scale }) => (scale < 1 ? "hidden" : "scroll")}; */
	overflow: hidden;
`;

const boundTo = (value, max, min) => {
  if (value > max) {
    return max;
  } else if (value < min) {
    return min;
  } else {
    return value;
  }
};

const OnDeviceScreen = ({ children }) => {
  const [backgroundScale, setBackgroundScale] = React.useState(1);
  const [style, set] = useSpring(() => ({
    scale: MAX_SCALE,
    from: {
      width: window.innerWidth,
      marginLeft: 0,
    },
  }));

  const onWheel = e => {
    const scale = style.scale.value;
    if (scale <= MAX_SCALE || scale >= MIN_SCALE) {
      const newScale = boundTo(e.deltaY / 1000 + scale, MAX_SCALE, MIN_SCALE);
      console.log(
        "scale",
        scale,
        "newScale",
        newScale,
        "e.deltaY / 1000",
        e.deltaY / 1000
      );
      set({ scale: newScale, config: { duration: 100 } });
    }
  };

  React.useEffect(() => {
    const WINDOW_TO_IMAGE_WIDTH_RATIO = window.innerWidth / SCREEN_WIDTH;
    if (WINDOW_TO_IMAGE_WIDTH_RATIO > 1) {
      setBackgroundScale(WINDOW_TO_IMAGE_WIDTH_RATIO);
    }
    console.log("WINDOW_TO_IMAGE_WIDTH_RATIO", WINDOW_TO_IMAGE_WIDTH_RATIO);

    const WINDOW_ASPECT_RATIO = window.innerWidth / window.innerHeight;

    set({
      to: async next => {
        console.log("WINDOW_ASPECT_RATIO", WINDOW_ASPECT_RATIO);
        console.log("SCREEN_ASPECT_RATIO", SCREEN_ASPECT_RATIO);
        if (window.innerWidth < SCREEN_WIDTH) {
          const FULL_WIDTH_RATIO = SCREEN_WIDTH / window.innerWidth;
          const FULL_WIDTH_SCALE_RATIO = 1 / FULL_WIDTH_RATIO;
          await next({
            scale: FULL_WIDTH_SCALE_RATIO,
            width: SCREEN_WIDTH,
            marginLeft: -(SCREEN_WIDTH - window.innerWidth) / 2,
            config: { duration: 1000 },
          });
        }

        await next({
          scale: MIN_SCALE,
          config: { duration: 1000 },
        });
      },
    });

    console.log("WINDOW_ASPECT_RATIO", WINDOW_ASPECT_RATIO);
  }, []);

  React.useEffect(() => {
    console.log("style", style);
  }, [style]);

  return (
    <Website
      style={{
        transform: style.scale.interpolate(scale => `scale(${scale})`),
        width: style.width ? style.width.interpolate(x => `${x}px`) : "100%",
        marginLeft: style.marginLeft,
      }}
      onWheel={onWheel}
    >
      <Background src={macbook} scale={backgroundScale} />
      <Content scale={backgroundScale}>{children}</Content>
    </Website>
  );
};

export default OnDeviceScreen;
