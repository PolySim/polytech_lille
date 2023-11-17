import { MenuMobileStyled } from "@/Components/Header/headerStyled.ts";
import MenuMobileMain from "@/Components/Header/Menu/Mobile/MenuMobileMain.tsx";
import SubMenuMobile from "@/Components/Header/Menu/Mobile/SubMenuMobile.tsx";
import { MenuContext } from "@/Context/MenuContext.ts";
import { useContext } from "react";

const MenuMobile = () => {
  const { isOpen } = useContext(MenuContext);

  return (
    <MenuMobileStyled $isOpen={isOpen.menu}>
      <MenuMobileMain />
      <SubMenuMobile />
    </MenuMobileStyled>
  );
};

export default MenuMobile;
