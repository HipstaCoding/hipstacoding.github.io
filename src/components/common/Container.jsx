import { LG_SCREEN_SIZE_PX } from "lib/screenSizes";
import styled from "styled-components";

export default styled.div`
  padding: 20px;

  & > * {
    max-width: ${LG_SCREEN_SIZE_PX}px;
    width: 100%;
    margin: 0 auto;
  }
`;
