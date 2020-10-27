import { css } from "styled-components";

export default {
  colors: {
    backgroundPrimary: "#292D34",
    backgroundSecondary: "#383D46",
    textColor: "#F2F7FD",
    textSecondaryColor: "#C57BDD",
    controlPrimaryColor: "#44A8F5",
    orange: "#E44D26",
    yellow: "#F7DF1E",
    blue: "#53C1DF",
  },
  fonts: {
    mainFont: (size, weight = 500) => css`
      font-family: "Montserrat", sans-serif;
      font-size: ${size}px;
      font-weight: ${weight};
    `,
    monoFont: (size, weight = 500) => css`
      font-family: "Consolas", monospace;
      font-size: ${size}px;
      font-weight: ${weight};
    `,
  },
};
