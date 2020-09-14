import React from "react";
import styled from "styled-components";
import macbook from "../images/macbook_bg.png";
import { useSpring, animated, interpolate } from "react-spring";
import useWindowSize from "../hooks/useWindowSize";

const MIN_SCALE = 0.4;
const MAX_SCALE = 1;

const IMAGE_WIDTH = 1980;
const IMAGE_HEIGHT = 1173;

const SCREEN_WIDTH = 1619;
const SCREEN_HEIGHT = 1044;
const SCREEN_ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const DURATION = 1000;

const Website = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  border: 1px dashed black;
`;

const Background = styled.img`
  position: absolute;
  top: -25px;
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translateX(-50%) scale(${props => props.scale});
  transform-origin: 50% 0;
  object-fit: contain;
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
`;

const Content = styled(animated.div)`
  /* width: ${SCREEN_WIDTH}px; */
  background-color: white;
	width: 100%;
  height: ${props => props.backgroundScale * SCREEN_HEIGHT}px;
  position: relative;
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

class SizeCalculator {
  constructor(totalWidth, totalHeight) {
    this.totalWidth = totalWidth;
    this.totalHeight = totalHeight;
    console.log("totalWidth", this.totalWidth);
    console.log("totalHeight", this.totalHeight);
    console.log("window aspect ratio:", this.windowAspectRatio);
    console.log("screen aspect:", SCREEN_ASPECT_RATIO);
    console.log("windowAspectRatio", this.windowAspectRatio);
    console.log("isScreenWider", this.isScreenWider);
    console.log("isScreenHigher", this.isScreenHigher);
    console.log("isScreenBigger", this.isScreenBigger);
    console.log("fullWidthScale", this.fullWidthScale);
    console.log("fullHeghtScale", this.fullHeghtScale);
    console.log("fullWidthRatio", this.fullWidthRatio);
    console.log("marginLeft", this.marginLeft);
  }

  get windowAspectRatio() {
    return this.totalWidth / this.totalHeight;
  }

  get isScreenWider() {
    return this.totalWidth < SCREEN_WIDTH;
  }

  get isScreenHigher() {
    return this.windowAspectRatio > SCREEN_ASPECT_RATIO;
  }

  get isScreenBigger() {
    return this.isScreenWider || this.isScreenHigher;
  }

  get fullWidthScale() {
    return this.totalWidth / SCREEN_WIDTH;
  }

  get fullHeghtScale() {
    return this.totalHeight / SCREEN_HEIGHT;
  }

  get fullWidthRatio() {
    return SCREEN_WIDTH / this.totalWidth;
  }

  calculateWidth(scale) {
    if (scale > this.fullWidthScale) {
      return this.totalWidth / scale;
    }
    return SCREEN_WIDTH;
  }

  calculateMarginLeft(scale) {
    if (scale >= this.fullWidthScale) {
      return (this.totalWidth - this.calculateWidth(scale)) / 2;
    }
    const finalMargin = (this.totalWidth - SCREEN_WIDTH) / 2;
    return finalMargin;
  }
}

const OnDeviceScreen = ({ children }) => {
  const ref = React.createRef();
  const calculatorRef = React.useRef();

  const [isAnimating, setAnimating] = React.useState(false);
  const total = useWindowSize();

  const [backgroundScale, setBackgroundScale] = React.useState(1);

  const [style, set, cancel] = useSpring(() => ({
    scale: MAX_SCALE,
    from: {
      width: total.width || `${SCREEN_WIDTH}px`,
      marginLeft: 0,
    },
    config: {
      duration: DURATION,
      easing: t => 1 - Math.pow(1 - t, 5)
    },
  }));

  const scaleTo = (prevScale, nextScale) => {
    cancel();
    console.log("calculatorRef", calculatorRef);
    if (calculatorRef.current.fullWidthScale > 1) {
      setBackgroundScale(calculatorRef.current.fullWidthScale);
    }
    set({
      to: {
        scale: nextScale,
      },
      onStart: () => setAnimating(true),
      onRest: () => setAnimating(false),
    });
  };

  const onWheel = e => {
    console.log('onWheel', onWheel);
    if (isAnimating) return;
    if (ref.current && ref.current.scrollTop > 10) return;

    const currentScale = style.scale.value;

    const isUp = e.deltaY > 0;
    const isDown = e.deltaY < 0;
    if (
      (currentScale < MAX_SCALE && isUp) ||
      (currentScale > MIN_SCALE && isDown)
    ) {
      const newScale = boundTo(e.deltaY + currentScale, MAX_SCALE, MIN_SCALE);
      console.log("newScale", newScale);
      console.log("prevScale", currentScale);
      scaleTo(currentScale, newScale);
    }
  };

  React.useEffect(() => {
    calculatorRef.current = new SizeCalculator(total.width, total.height);
    setTimeout(() => {
      scaleTo(MAX_SCALE, MIN_SCALE);
    }, 500);
  }, []);

  return (
    <Website
      onWheel={onWheel}
      style={{
        transform: style.scale.interpolate(scale => `scale(${scale})`),
        width: style.scale.interpolate(v => {
          const width = calculatorRef.current
            ? calculatorRef.current.calculateWidth(v)
            : "100%";
          console.log("width", width);
          return width;
        }),
        marginLeft: style.scale.interpolate(v => {
          const marginLeft = calculatorRef.current
            ? calculatorRef.current.calculateMarginLeft(v)
            : 0;
          console.log("marginLeft", marginLeft);
          return marginLeft;
        }),
      }}
    >
      <Background src={macbook} scale={backgroundScale} />
      <Content
        ref={ref}
        backgroundScale={backgroundScale}
        style={{
          overflow: style.scale.interpolate(x => {
            return x < 1 ? "hidden" : "auto";
          }),
        }}
      >
        {children}
      </Content>
    </Website>
  );
};

export default OnDeviceScreen;
