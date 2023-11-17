import { HeaderStyled } from "./headerStyled.ts";
import { useEffect, useState } from "react";
import Sponsor from "./Sponsor.tsx";
import MenuLaptop from "./Menu/Laptop/MenuLaptop.tsx";
import OpenMenu from "./OpenMenu.tsx";
import MenuMobile from "@/Components/Header/Menu/Mobile/MenuMobile.tsx";
import { useMenu } from "@/Utils/useMenu.ts";
import { MenuContext } from "@/Context/MenuContext.ts";

const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const { isOpen, toggleOpen } = useMenu();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MenuContext.Provider value={{ isOpen, toggleOpen }}>
      <HeaderStyled>
        <div>
          <a href="/">
            <img src="/polytechlille.png" alt="Main logo Polytech Lille" />
          </a>
        </div>
        {width > 1280 ? (
          <>
            <MenuLaptop />
            <Sponsor />
          </>
        ) : (
          <MenuMobile />
        )}
        {width <= 1280 ? <OpenMenu /> : null}
      </HeaderStyled>
    </MenuContext.Provider>
  );
};

export default Header;
