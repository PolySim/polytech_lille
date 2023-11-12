import { CategoryStyled, MenuMobileStyled } from "../../headerStyled.ts";
import { menuCategories } from "@/Data/menuCategories.ts";
import { useContext } from "react";
import { MainContext } from "@/context.ts";

const MenuMobileMain = ({
  isOpen,
  toggleSubMenu,
}: {
  isOpen: boolean;
  toggleSubMenu: (category: string) => void;
}) => {
  const { language, handlerLanguage } = useContext(MainContext);

  return (
    <MenuMobileStyled $isOpen={isOpen}>
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
            onClick={() => toggleSubMenu(category.english)}
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
