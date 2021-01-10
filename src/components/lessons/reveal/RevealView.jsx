import { useEffect, useContext, useState } from "react";
import styled, { css } from "styled-components";
import Logo from "components/Logo";
import { Link } from "gatsby";
import { ReactComponent as HtmlColoredSvg } from "assets/icons/html5-colored.svg";
import { RevealContext } from "./RevealProvider";

const opacityAnimationCss = css`
  position: absolute;
  opacity: ${({ isVisilbe }) => (isVisilbe ? 0.5 : 0)};
  transition: opacity 0.5s, transform 0.8s;
  transform: ${({ isVisilbe }) =>
    isVisilbe ? "tranlateY(-50%)" : "translateY(-100%)"};
`;

const StyledHtmlColoredSvg = styled(HtmlColoredSvg)`
  right: 0;
  z-index: 0;
  max-height: 100%;
  width: 50%;
  top: 50%;
  transform: ${({ isVisilbe }) =>
    isVisilbe ? "translateY(-50%) rotate(-10deg)" : "translateY(-100%)"};
  ${opacityAnimationCss}
`;

const StyledLogo = styled(Logo)`
  bottom: 10vh;
  fill: ${({ theme }) => theme.colors.textColor};
  padding: 0 10px;
  width: 100%;
`;

const LeftLink = styled(Link)`
  ${opacityAnimationCss}
  width: 150px;
  bottom: 20px;
  left: 40px;
  transform: ${({ isVisilbe }) =>
    isVisilbe ? "translateY(0)" : "translateY(100%)"};
`;

const CenterLink = styled(Link)`
  ${opacityAnimationCss}
  bottom: 10vh;
  left: 50%;
  width: 20vh;
  transform: ${({ isVisilbe }) =>
    isVisilbe
      ? "translateY(0) translateX(-50%)"
      : "translateY(-100%) translateX(-50%)"};
`;

const RevealViewport = styled.div`
  height: 100vh;
  position: relative;
`;

const Gradient = styled.div`
  position: absolute;
  opacity: ${({ isVisilbe }) => (isVisilbe ? 1 : 0)};
  transition: opacity 0.5s;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transform: rotate(-180deg);
  background: linear-gradient(
    180deg,
    #1d1f23 15.93%,
    rgba(29, 31, 35, 0) 92.7%
  );
  pointer-events: none;
`;

export default function RevealView({ children }) {
  const reveal = useContext(RevealContext);
  const [isFirstSlide, setFirstSlide] = useState(true);
  console.log("isFirstSlide", isFirstSlide);
  useEffect(() => {
    console.log("reveal", reveal);
    if (reveal) {
      reveal.on("slidechanged", ({ indexh, indexv }) => {
        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        console.log(event.indexh, event.indexv);
        if (indexh === 0 && indexv === 0) {
          setFirstSlide(true);
        } else {
          setFirstSlide(false);
        }
        // if (event.previousSlide)
      });
    }
  }, [reveal]);
  return (
    <>
      <StyledHtmlColoredSvg isVisilbe={isFirstSlide} />
      <Gradient isVisilbe={isFirstSlide} />
      <RevealViewport id="reveal" className="reveal">
        <div className="slides">{children}</div>
      </RevealViewport>
      <LeftLink to="/" isVisilbe={!isFirstSlide}>
        <StyledLogo />
      </LeftLink>
      <CenterLink to="/" isVisilbe={isFirstSlide}>
        <StyledLogo />
      </CenterLink>
    </>
  );
}
