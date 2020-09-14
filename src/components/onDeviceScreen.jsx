import React from "react";
import styled from "styled-components";
import macbook from "../images/macbook_bg.png";
import { useSpring, animated } from "react-spring";
import useWindowSize from "../hooks/useWindowSize";
import { throttle, debounce } from "lodash";

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
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
`;

const Content = styled(animated.div)`
  /* width: ${SCREEN_WIDTH}px; */
	width: 100%;
  height: ${props => props.backgroundScale * SCREEN_HEIGHT}px;
  background-color: aqua;
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

const ScaleConfig = (config, scale) => {
  return {
    scale,
    config,
  };
};

const FitWidthConfig = (config, scale, width, marginLeft) => {
  return {
    config,
    scale,
    width,
    marginLeft,
  };
};

class SizeCalculator {
  constructor(totalWidth, totalHeight) {
    this.totalWidth = totalWidth;
    this.totalHeight = totalHeight;
  }

  get windowAspectRatio() {
    return this.totalWidth / this.totalHeight;
  }

  get isScreenWider() {
    return this.totalWidth < SCREEN_WIDTH;
  }

  get isScreenHigher() {
    return this.totalHeight < SCREEN_HEIGHT;
  }

  get isScreenBigger() {
    return this.isScreenWider || this.isScreenHigher;
  }

  get fullWidthScale() {
    return this.totalWidth / SCREEN_WIDTH;
  }

  get fullWidthRatio() {
    return SCREEN_WIDTH / this.totalWidth;
  }

  get marginLeft() {
    return -(SCREEN_WIDTH - window.innerWidth) / 2;
  }
}

class ZoomOutTransition {
  constructor(calculator) {
    this.calculator = calculator;
    this.config = {};
  }

  transit(prevScale, nextScale) {
    const stages = [];

    if (
      this.calculator.isScreenWider &&
      nextScale < this.calculator.fullWidthScale
    ) {
      stages.push(
        FitWidthConfig(
          { duration: 1000 },
          this.calculator.fullWidthScale,
          SCREEN_WIDTH,
          this.calculator.marginLeft
        )
      );
    }

    if (this.calculator.isScreenHigher) {
      // TODO
    }

    stages.push(ScaleConfig({}, nextScale));

    return stages;
  }
}

class ZoomInTransition {
  constructor(calculator) {
    this.calculator = calculator;
    this.config = {};
  }

  transit(prevScale, nextScale) {
    const stages = [];

    if (!this.calculator.isScreenBigger) {
      return [ScaleConfig({}, nextScale)];
    }

    if (
      this.calculator.isScreenWider &&
      nextScale > this.calculator.fullWidthScale
    ) {
      stages.push(ScaleConfig({}, this.calculator.fullWidthScale));
      stages.push(
        FitWidthConfig(
          { duration: 1000 },
          nextScale,
          this.calculator.totalWidth,
          0
        )
      );
    } else {
      stages.push(ScaleConfig({}, nextScale));
    }

    return stages;
  }
}

const OnDeviceScreen = ({ children }) => {
  const ref = React.createRef();
  const total = useWindowSize();

  const [backgroundScale, setBackgroundScale] = React.useState(1);

  const [style, set, cancel] = useSpring(() => ({
    scale: MAX_SCALE,
    from: {
      width: total.width || `${SCREEN_WIDTH}px`,
      marginLeft: 0,
    },
  }));

  const scaleTo = (prevScale, nextScale) => {
    cancel();
    const calculator = new SizeCalculator(total.width, total.height);
    if (calculator.fullWidthScale > 1) {
      setBackgroundScale(calculator.fullWidthScale);
    }

    set({
      to: async (next, cancel) => {
        const config = { duration: 1000 };
        let transition;
        if (prevScale > nextScale) {
          transition = new ZoomOutTransition(calculator, config);
        } else {
          transition = new ZoomInTransition(calculator, config);
        }

        const stages = transition.transit(prevScale, nextScale);

        for (const stage of stages) {
          await next(stage);
        }
      },
    });
  };

  const onWheel = e => {
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
    scaleTo(MAX_SCALE, MIN_SCALE);
  }, []);

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
