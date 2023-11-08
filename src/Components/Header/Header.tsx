import { HeaderStyled } from "./headerStyled.ts";
import { useEffect, useState } from "react";
import Sponsor from "./Sponsor.tsx";
import MenuLaptop from "./MenuLaptop.tsx";
import MenuMobile from "./MenuMobile.tsx";
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
      {width > 1280 ? <MenuLaptop /> : <MenuMobile isOpen={MenuMobileOpen} />}
      {width > 768 ? <Sponsor /> : null}
      {width <= 1280 ? <OpenMenu toggleMenuMobile={toggleMenuMobile} /> : null}
    </HeaderStyled>
  );
};

export default Header;
