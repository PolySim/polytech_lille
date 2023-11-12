import { HeaderStyled } from "./headerStyled.ts";
import { useEffect, useState } from "react";
import Sponsor from "./Sponsor.tsx";
import MenuLaptop from "./Menu/Laptop/MenuLaptop.tsx";
import OpenMenu from "./OpenMenu.tsx";
import MenuMobile from "@/Components/Header/Menu/Mobile/MenuMobile.tsx";

const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [MenuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);
  const [subMenuOpen, setSubMenuOpen] = useState<string>("");

  const toggleSubMenu = (category: string) => setSubMenuOpen(category);

  const toggleMenuMobile = () => setMenuMobileOpen((curr) => !curr);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
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
        <MenuMobile
          isOpen={MenuMobileOpen}
          toggleSubMenu={toggleSubMenu}
          subMenuOpen={subMenuOpen}
        />
      )}
      {width <= 1280 ? (
        <OpenMenu
          isOpen={MenuMobileOpen}
          toggleMenuMobile={toggleMenuMobile}
          toggleSubMenu={toggleSubMenu}
        />
      ) : null}
    </HeaderStyled>
  );
};

export default Header;
