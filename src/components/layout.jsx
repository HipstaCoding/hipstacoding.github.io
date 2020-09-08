import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap');

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
`

const Layout = ({ children }) => (
  <Container>
    <GlobalStyle />
    {children}
  </Container>
);

export default Layout;
