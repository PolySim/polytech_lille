import { HeaderStyled } from "./headerStyled.ts";
import { useEffect, useState } from "react";
import Sponsor from "./Sponsor.tsx";
import MenuLaptop from "./Menu/MenuLaptop.tsx";
import MenuMobile from "./Menu/MenuMobile.tsx";
import OpenMenu from "./OpenMenu.tsx";

const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [MenuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);

  const toggleMenuMobile = () => {
    setMenuMobileOpen((curr) => !curr);
  };

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
        <MenuMobile isOpen={MenuMobileOpen} />
      )}
      {width <= 1280 ? (
        <OpenMenu isOpen={MenuMobileOpen} toggleMenuMobile={toggleMenuMobile} />
      ) : null}
    </HeaderStyled>
  );
};

export default Header;
