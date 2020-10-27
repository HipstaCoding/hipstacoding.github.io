export const LG_SCREEN_SIZE_PX = 1200;
export const MD_SCREEN_SIZE_PX = 992;
export const SM_SCREEN_SIZE_PX = 768;

const createMinQuerySize = size => `(min-width: ${size}px)`;
const createMaxQuerySize = size => `(max-width: ${size}px)`;

export const mediaQueries = {
  lg: createMinQuerySize(LG_SCREEN_SIZE_PX),
  md: createMinQuerySize(MD_SCREEN_SIZE_PX),
  sm: createMinQuerySize(SM_SCREEN_SIZE_PX),
  xs: createMaxQuerySize(SM_SCREEN_SIZE_PX),
};
