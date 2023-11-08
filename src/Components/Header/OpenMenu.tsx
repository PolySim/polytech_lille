import { OpenMenuStyled } from "@/Components/Header/headerStyled.ts";

const OpenMenu = ({
  isOpen,
  toggleMenuMobile,
}: {
  isOpen: boolean;
  toggleMenuMobile: () => void;
}) => {
  return (
    <OpenMenuStyled $isOpen={isOpen} onClick={toggleMenuMobile}>
      <span></span>
      <span></span>
      <span></span>
    </OpenMenuStyled>
  );
};

export default OpenMenu;
