import { MenuLaptopStyled } from "../headerStyled.ts";
import { categories } from "@/Components/Header/Menu/categories.ts";
import { useContext } from "react";
import { MainContext } from "@/context.ts";

const MenuLaptop = () => {
  const { language, handlerLanguage } = useContext(MainContext);

  return (
    <MenuLaptopStyled>
      {categories.map((category) =>
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
