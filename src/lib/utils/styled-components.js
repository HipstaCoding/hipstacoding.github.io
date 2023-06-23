import { css } from "styled-components";

export const opacityAnimationCss = (visible = 1, hidden = 0) => css`
  opacity: ${({ isVisible }) => (isVisible ? visible : hidden)};
`;
