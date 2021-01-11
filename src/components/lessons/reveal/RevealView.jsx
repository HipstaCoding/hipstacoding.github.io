import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import Logo from "components/Logo";
import { Link } from "gatsby";
import { ReactComponent as HtmlColoredSvg } from "assets/icons/html5-css3.svg";
import { RevealContext } from "./RevealProvider";
import { opacityAnimationCss } from "lib/utils/styled-components";

const StyledHtmlColoredSvg = styled(HtmlColoredSvg)`
  position: absolute;
  right: -10%;
  z-index: 0;
  max-height: 100%;
  width: 70%;
  top: 50%;
  ${opacityAnimationCss(0.5)}
  transition: opacity 0.5s, transform 0.8s;
  transform: ${({ isVisilbe }) =>
    isVisilbe ? "translateY(-50%)" : "rotate(10deg) translateY(-100%)"};
`;

const StyledLogo = styled(Logo)`
  fill: ${({ theme }) => theme.colors.textColor};
  padding: 0 10px;
  width: 100%;
`;

const LeftLink = styled(Link)`
  position: absolute;
  transition: opacity 0.5s, transform 0.8s;
  ${opacityAnimationCss(0.5)}
  width: 150px;
  bottom: 20px;
  left: 40px;
  transform: ${({ isVisilbe }) =>
    isVisilbe ? "translateY(0)" : "translateY(100%)"};
`;

const CenterLink = styled(Link)`
  position: absolute;
  transition: opacity 0.5s, transform 0.8s;
  ${opacityAnimationCss(0.5)}
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
  ${opacityAnimationCss(1)}
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
  const [slides, setSlides] = useState([0, 0]);
  const isFirstSlide = slides[0] === 0 && slides[1] === 0;

  useEffect(() => {
    if (reveal) {
      const { v, h } = reveal.getIndices();
      setSlides([v, h]);
      reveal.on("slidechanged", ({ indexh, indexv }) => {
        setSlides([indexv, indexh]);
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
