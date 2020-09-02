import React from "react";
import Logo from "../components/logo";
import styled, { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap');
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const IndexPage = () => (
  <>
    <div>
      <GlobalStyle />
      <Header>
        <Logo />
        <a
          href="https://github.com/HipstaCodingSchool"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="2x" icon={faGithubSquare} />
        </a>
      </Header>
    </div>
  </>
);

export default IndexPage;
