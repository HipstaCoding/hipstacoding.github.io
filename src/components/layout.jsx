import styled from "styled-components";
import "assets/imports.css";

const Container = styled.div`
  overflow: hidden;
`;

const Layout = ({ children }) => <Container>{children}</Container>;

export default Layout;
