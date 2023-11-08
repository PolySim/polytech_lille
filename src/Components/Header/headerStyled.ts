import styled from "styled-components";
import { color, font } from "@/global_style.ts";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 48px;
  margin: 20px 0;
  height: 75px;
  width: 100%;
  z-index: 10;

  > div:nth-of-type(1) {
    height: 100%;
  }
`;

export const SponsorStyled = styled.div`
  display: flex;
  height: 40%;
  width: fit-content;

  > div {
    margin: 0 6px;
  }

  > div:nth-of-type(4) {
    margin-right: 0;
  }
`;

export const MenuLaptopStyled = styled.div`
  display: flex;

  p {
    font-family: ${font.bebas};
    font-size: 24px;
    color: white;
    filter: drop-shadow(0 0 0.75rem ${color.black});
    margin: 0 0 0 24px;
  }

  p:nth-of-type(1) {
    margin-left: 0;
  }
`;

export const MenuMobileStyled = styled.div``;
