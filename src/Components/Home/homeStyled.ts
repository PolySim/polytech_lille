import styled from "styled-components";
import { color, font } from "@/global_style.ts";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

export const HomeStyled = styled.div`
  scroll-snap-align: center;
  position: relative;
  width: 100vw;
  height: 100vh;

  > video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${font.bebas};
    text-align: center;
    font-size: 72px;
    color: ${color.blueDark};
    text-shadow: 0 0 0.75rem ${color.lightYellow};
    padding: 0 42px;
    width: 100%;

    @media screen and (max-width: 768px) {
      font-size: 48px;
    }
  }
`;

export const HomeContent = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  background-color: ${color.blueDark};
`;

export const WelcomeStyled = styled.div`
  display: flex;
  justify-content: space-around;
  height: fit-content;
  width: 100%;
  padding: 96px 48px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 72px 24px 48px;
  }
`;

export const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  h4 {
    font-family: ${font.bebas};
    font-size: 36px;
    color: white;
    margin-bottom: 24px;
  }

  p {
    color: ${color.lightYellow};
    line-height: 1.5;
  }

  span {
    display: block;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 48px;

    h4 {
      padding-left: 24px;
    }
  }
`;
