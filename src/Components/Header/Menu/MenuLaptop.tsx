import { MenuLaptopStyled } from "../headerStyled.ts";
import { menuCategories } from "@/Data/menuCategories.ts";
import { useContext } from "react";
import { MainContext } from "@/context.ts";

const MenuLaptop = () => {
  const { language, handlerLanguage } = useContext(MainContext);

  return (
    <MenuLaptopStyled>
      {menuCategories.map((category) =>
        category.french === "ENGLISH" ? (
          <p key={category.english} onClick={handlerLanguage}>
            {language === "french" ? category.french : category.english}
          </p>
        ) : (
          <p key={category.english}>
            {language === "french" ? category.french : category.english}
          </p>
        ),
      )}
    </MenuLaptopStyled>
  );
};

export default MenuLaptop;
