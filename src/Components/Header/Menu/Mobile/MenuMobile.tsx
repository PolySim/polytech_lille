import { MenuMobileStyled } from "@/Components/Header/headerStyled.ts";
import MenuMobileMain from "@/Components/Header/Menu/Mobile/MenuMobileMain.tsx";
import SubMenuMobile from "@/Components/Header/Menu/Mobile/SubMenuMobile.tsx";

const MenuMobile = ({
  isOpen,
  toggleSubMenu,
  subMenuOpen,
}: {
  isOpen: boolean;
  toggleSubMenu: (category: string) => void;
  subMenuOpen: string;
}) => {
  return (
    <MenuMobileStyled $isOpen={isOpen}>
      <MenuMobileMain
        toggleSubMenu={toggleSubMenu}
        isOpen={subMenuOpen === ""}
      />
      <SubMenuMobile
        categoryName={subMenuOpen}
        toggleSubMenu={toggleSubMenu}
        isOpen={isOpen}
      />
    </MenuMobileStyled>
  );
};

export default MenuMobile;
