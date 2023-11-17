import { OpenMenuStyled } from "@/Components/Header/headerStyled.ts";
import { useContext } from "react";
import { MenuContext } from "@/Context/MenuContext.ts";

const OpenMenu = () => {
  const { isOpen, toggleOpen } = useContext(MenuContext);

  return (
    <OpenMenuStyled $isOpen={isOpen.menu} onClick={() => toggleOpen("menu")}>
      <span></span>
      <span></span>
      <span></span>
    </OpenMenuStyled>
  );
};

export default OpenMenu;
