import { menuCategories } from "@/Data/menuCategories.ts";
import {
  CategoryStyled,
  SubCategoryStyled,
  SubmenuStyled,
} from "@/Components/Header/headerStyled.ts";
import { MainContext } from "@/Context/context.ts";
import { useContext } from "react";
import { MenuContext } from "@/Context/MenuContext.ts";

const SubMenuMobile = () => {
  const { language } = useContext(MainContext);
  const { isOpen, toggleOpen } = useContext(MenuContext);
  const subMenuCategories = menuCategories.find(
    (category) => category.id === isOpen.submenu,
  )?.submenu;

  return (
    <SubmenuStyled
      $isOpen={isOpen.menu}
      $subMenuOpen={isOpen.submenu !== undefined}
    >
      <CategoryStyled $last={false} onClick={() => toggleOpen("submenu")}>
        {language === "french" ? "Retour" : "Back"}
      </CategoryStyled>
      {subMenuCategories ? (
        subMenuCategories.map((category) =>
          category.isTitle ? (
            <CategoryStyled
              style={{ cursor: "default" }}
              $last={false}
              key={category.french}
            >
              {language === "french" ? category.french : category.english}
            </CategoryStyled>
          ) : (
            <SubCategoryStyled
              to={category.link || "/"}
              $last={false}
              key={category.english}
              onClick={() => toggleOpen("both")}
            >
              {language === "french" ? category.french : category.english}
            </SubCategoryStyled>
          ),
        )
      ) : (
        <></>
      )}
    </SubmenuStyled>
  );
};

export default SubMenuMobile;
