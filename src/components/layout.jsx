import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import useTabSelect from "hooks/useTabSelection";
import DARK_THEME from "lib/theme";
import { lighten } from "polished";
import Seo from "components/Seo";
import { useEffect } from "react";
import "assets/imports.css";

const Container = styled.div`
  overflow: hidden;
`;

const GlobalStyles = createGlobalStyle`
  html {
    ${({ theme }) => theme.fonts.mainFont(24)};
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.textColor};
  }
  
  body:not([tab-user]) button:focus,
  body:not([tab-user]) input:focus,
  body:not([tab-user]) select:focus,
  body:not([tab-user]) a:focus,
  body:not([tab-user]) textarea:focus {
    outline: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${({ theme }) => theme.colors.textColor};
  }

  button {
    border: 0;
    padding: 0;
    background-color: transparent;
  }
  
  button:hover {
    cursor: pointer;
  }

  button:active {
    color: initial;
  }

  a {
    transition: 0.3s color;
    color: ${({ theme }) => theme.colors.textSecondaryColor};
  }

  a:hover {
    color: ${({ theme }) => lighten(0.1, theme.colors.textSecondaryColor)};
  }
`;

const Layout = ({ children }) => {
  useTabSelect();

  return (
    <ThemeProvider theme={DARK_THEME}>
      <Seo />
      <GlobalStyles />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
