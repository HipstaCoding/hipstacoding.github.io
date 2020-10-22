import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import "assets/imports.css";

const GlobalStyle = createGlobalStyle`
	body,html {
    margin: 0;
    padding: 0;
	}

	* {
			box-sizing: border-box;
	}
`;

const Container = styled.div`
  overflow: hidden;
`;

const Layout = ({ children }) => (
  <Container>
    <GlobalStyle />
    {children}
  </Container>
);

export default Layout;
