import { OpenMenuStyled } from "@/Components/Header/headerStyled.ts";

const OpenMenu = ({
  isOpen,
  toggleMenuMobile,
  toggleSubMenu,
}: {
  isOpen: boolean;
  toggleMenuMobile: () => void;
  toggleSubMenu: (category: string) => void;
}) => {
  return (
    <OpenMenuStyled
      $isOpen={isOpen}
      onClick={() => {
        toggleMenuMobile();
        toggleSubMenu("");
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </OpenMenuStyled>
  );
};

export default OpenMenu;
