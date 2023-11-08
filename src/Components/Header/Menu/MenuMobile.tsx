import { CategoryStyled, MenuMobileStyled } from "../headerStyled.ts";
import { categories } from "@/Components/Header/Menu/categories.ts";
import { useContext } from "react";
import { MainContext } from "@/context.ts";

const MenuMobile = ({ isOpen }: { isOpen: boolean }) => {
  const { language, handlerLanguage } = useContext(MainContext);

  return (
    <MenuMobileStyled $isOpen={isOpen}>
      {categories.map((category, index) =>
        category.french === "ENGLISH" ? (
          <CategoryStyled
            key={category.english}
            $last={index + 1 === categories.length}
            onClick={handlerLanguage}
          >
            {language === "french" ? category.french : category.english}
          </CategoryStyled>
        ) : (
          <CategoryStyled
            key={category.english}
            $last={index + 1 === categories.length}
          >
            {language === "french" ? category.french : category.english}
          </CategoryStyled>
        ),
      )}
    </MenuMobileStyled>
  );
};

export default MenuMobile;
