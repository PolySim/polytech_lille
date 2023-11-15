import styled from "styled-components";
import { color, font } from "@/global_style.ts";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 48px;
  height: 75px;
  width: 100%;
  z-index: 10;

  > div:nth-of-type(1) {
    height: 100%;
    z-index: 100;

    @media screen and (max-width: 768px) {
      filter: drop-shadow(0 0 0.75rem ${color.black});
    }
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
    cursor: pointer;
    z-index: 1000;
  }

  p:nth-of-type(1) {
    margin-left: 0;
  }
`;

export const OpenMenuStyled = styled.div<{ $isOpen: boolean }>`
  z-index: 1000;
  margin-left: 24px;
  position: relative;
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease-in-out;

  > span {
    position: absolute;
    top: 20px;
    background-color: white;
    filter: drop-shadow(0 0 0.75rem ${color.black});
    height: 2px;
    width: 50px;
    transition:
      transform 0.3s ease-out,
      opacity 0.1s ease-out;

    @media screen and (max-width: 300px) {
      width: 30px;
    }
  }

  > span:nth-of-type(1) {
    transform: ${(props) =>
      props.$isOpen ? "translateY(10px) rotate(135deg)" : "translateY(20px)"};
  }

  > span:nth-of-type(2) {
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
  }

  > span:nth-of-type(3) {
    transform: ${(props) =>
      props.$isOpen ? "translateY(10px) rotate(-135deg)" : "translateY(10px)"};
  }
`;

export const MenuMobileStyled = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: -100%;
  width: 100vw;
  height: 100vh;
  background-color: ${color.blueDark};
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.$isOpen ? "translateX(100%)" : "translateX(0)"};
`;

export const CategoryStyled = styled.div<{ $last?: boolean }>`
  font-family: ${font.bebas};
  font-size: 36px;
  margin-bottom: ${(props) => (props.$last ? "0" : "24px")};
  color: white;
  cursor: pointer;
`;

export const SubmenuStyled = styled(MenuMobileStyled)<{
  $subMenuOpen: boolean;
}>`
  transform: ${(props) =>
    props.$subMenuOpen
      ? "translateX(100%)"
      : props.$isOpen
      ? "translateX(200%)"
      : "translateX(0)"};
`;

export const SubCategoryStyled = styled(Link)<{ $last?: boolean }>`
  font-family: ${font.m2};
  font-size: 20px;
  margin-bottom: ${(props) => (props.$last ? "0" : "24px")};
  color: white;
  text-decoration: none;
`;

export const SubMenuLaptopStyled = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 80px 48px 24px 48px;
  width: 100vw;
  height: fit-content;
  background-color: ${color.blueDark};
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.$isOpen ? "translateY(0)" : "translateY(-100%)"};
`;
