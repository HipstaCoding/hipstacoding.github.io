import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import useTabSelect from "hooks/useTabSelection";
import DARK_THEME from "lib/theme";
import "assets/imports.css";

const Container = styled.div`
  overflow: hidden;
`;

const GlobalStyles = createGlobalStyle`
  html {
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
`;

const Layout = ({ children }) => {
  useTabSelect();
  return (
    <ThemeProvider theme={DARK_THEME}>
      <GlobalStyles />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
