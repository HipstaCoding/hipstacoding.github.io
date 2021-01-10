import { css } from "styled-components";

export const opacityAnimationCss = (visible = 1, hidden = 0) => css`
  opacity: ${({ isVisilbe }) => (isVisilbe ? visible : hidden)};
`;
