import styled from "styled-components";

import bgMobile from "../assets/bg-main-mobile.png";
import bgDesktop from "../assets/bg-main-desktop.png";

export const HeroStyled = styled.header`
  background-image: url(${bgMobile});
  width: 100%;
  height: 15rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media only screen and (min-width: 700px) {
    width: 30%;
    height: 100vh;
    background-image: url(${bgDesktop});
  }
`;
