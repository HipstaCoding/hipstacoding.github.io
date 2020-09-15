import React from "react";
import OnDeviceScreen from "../components/onDeviceScreen";
import Layout from "../components/layout";
import Lewkanfun from "../lewkanfun/App";

const IndexPage = () => {
  return (
    <Layout>
      <OnDeviceScreen>
        <Lewkanfun />
      </OnDeviceScreen>
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query IndexQuery {
//     macbook: file(relativePath: { eq: "macbook_bg.png" }) {
//       childImageSharp {
//         fluid(quality: 100, maxWidth: 1980, maxHeight: 1173) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
