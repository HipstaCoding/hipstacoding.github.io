import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import { mediaQueries } from "lib/screenSizes";
import styled from "styled-components";
import heroImagePng from "assets/images/hero-image.png";
import AtomImage from "components/AtomImage";
import Container from "components/common/Container";
import { JsLogo, HtmlLogo, ReactLogo } from "components/common/Icons.jsx";


const Banner = styled.div`
  position: relative;
  min-height: 580px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${mediaQueries.sm} {
    padding: 50px 0;
  }
`;

const HeroImage = styled(AtomImage)`
  top: 50px;
  right: 0;
  height: calc(100vh - 120px - 100px);
  width: calc(100vh - 120px - 100px);
  max-width: 400px;
  max-height: 400px;

  @media ${mediaQueries.xs} {
    position: relative;
    top: 0;
    margin: 50px auto;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`;

const Lessons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    line-height: 1.4;
  }
`;

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSitePage(
        filter: { path: { regex: "/lessons/html/" } }
        sort: { fields: path, order: ASC }
      ) {
        nodes {
          path
        }
      }
    }
  `);
  console.log("data", data);
  return (
    <Layout>
      <Container as="main">
        <Banner id="subscribe">
          <HeroImage
            alt="Человек с ноутбуком летает и вокруг внего вращаются html, js и react"
            src={heroImagePng}
            electrons={[JsLogo, ReactLogo, HtmlLogo]}
            width="380"
            height="400"
          />
        </Banner>
        <Lessons>
          <h2>HTML Lessons:</h2>
          <ol>
            {data.allSitePage.nodes.map(node => {
              return (
                <li key={node.path}>
                  <a href={node.path}>{node.path}</a>
                </li>
              );
            })}
          </ol>
        </Lessons>
      </Container>
    </Layout>
  );
}
