import styled from "styled-components";
import { color, font } from "@/global_style.ts";

export const HomeStyled = styled.div`
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
