import { CategoryStyled, MenuMobileStyled } from "../../headerStyled.ts";
import { menuCategories } from "@/Data/menuCategories.ts";
import { useContext } from "react";
import { MainContext } from "@/Context/context.ts";
import { MenuContext } from "@/Context/MenuContext.ts";

const MenuMobileMain = () => {
  const { language, handlerLanguage } = useContext(MainContext);
  const { isOpen, toggleOpen } = useContext(MenuContext);

  return (
    <MenuMobileStyled $isOpen={isOpen.menu}>
      {menuCategories.map((category, index) =>
        category.french === "ENGLISH" ? (
          <CategoryStyled
            key={category.english}
            $last={index + 1 === menuCategories.length}
            onClick={handlerLanguage}
          >
            {language === "french" ? category.french : category.english}
          </CategoryStyled>
        ) : category.submenu ? (
          <CategoryStyled
            key={category.english}
            $last={index + 1 === menuCategories.length}
            onClick={() => toggleOpen("submenu", category.id)}
          >
            {language === "french" ? category.french : category.english}
          </CategoryStyled>
        ) : (
          <CategoryStyled
            key={category.english}
            $last={index + 1 === menuCategories.length}
          >
            {language === "french" ? category.french : category.english}
          </CategoryStyled>
        ),
      )}
    </MenuMobileStyled>
  );
};

export default MenuMobileMain;
