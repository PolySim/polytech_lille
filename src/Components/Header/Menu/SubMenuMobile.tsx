import { menuCategories } from "@/Data/menuCategories.ts";
import {
  CategoryStyled,
  SubCategoryStyled,
  SubmenuStyled,
} from "@/Components/Header/headerStyled.ts";
import { MainContext } from "@/context.ts";
import { useContext } from "react";

const SubMenuMobile = ({
  toggleSubMenu,
  categoryName,
  isOpen,
}: {
  toggleSubMenu: (category: string) => void;
  categoryName: string;
  isOpen: boolean;
}) => {
  const { language } = useContext(MainContext);
  const subMenuCategories = menuCategories.find(
    (category) => category.english === categoryName,
  )?.submenu;

  return (
    <SubmenuStyled $isOpen={isOpen} $subMenuOpen={categoryName !== ""}>
      <CategoryStyled $last={false} onClick={() => toggleSubMenu("")}>
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
              onClick={() => toggleSubMenu("")}
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
