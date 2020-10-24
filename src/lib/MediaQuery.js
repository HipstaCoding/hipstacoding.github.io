export const mediaQuery = {
  sizes: {
    xl: 1080,
  },
  query: size => {
    return style => `@media (min-width: ${size}px) { ${style} }`;
  },
};
