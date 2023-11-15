import { MenuLaptopStyled } from "../../headerStyled.ts";
import { menuCategories } from "@/Data/menuCategories.ts";
import { useContext, useState } from "react";
import { MainContext } from "@/context.ts";
import SubMenuLaptop from "@/Components/Header/Menu/Laptop/SubMenuLaptop.tsx";

const MenuLaptop = () => {
  const { language, handlerLanguage } = useContext(MainContext);
  const [menuHover, setMenuHover] = useState<number>(-1);

  const onMouseLeave = () => setMenuHover(-1);

  return (
    <MenuLaptopStyled>
      {menuCategories.map((category) =>
        category.french === "ENGLISH" ? (
          <p key={category.english} onClick={handlerLanguage}>
            {language === "french" ? category.french : category.english}
          </p>
        ) : (
          <p
            onMouseEnter={() => setMenuHover(category.id)}
            key={category.english}
          >
            {language === "french" ? category.french : category.english}
          </p>
        ),
      )}
      <SubMenuLaptop onMouseLeave={onMouseLeave} menuHover={menuHover} />
    </MenuLaptopStyled>
  );
};

export default MenuLaptop;
