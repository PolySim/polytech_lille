import {
  CategoryStyled,
  SubCategoryStyled,
  SubMenuLaptopStyled,
} from "@/Components/Header/headerStyled.ts";
import { menuCategories } from "@/Data/menuCategories.ts";
import { MainContext } from "@/Context/context.ts";
import { useContext } from "react";

const SubMenuLaptop = ({
  menuHover,
  onMouseLeave,
}: {
  menuHover: number;
  onMouseLeave: () => void;
}) => {
  const { language } = useContext(MainContext);
  const subMenuCategories = menuCategories.find(
    (category) => category.id === menuHover,
  )?.submenu;

  return (
    <SubMenuLaptopStyled onMouseLeave={onMouseLeave} $isOpen={menuHover !== -1}>
      {subMenuCategories
        ? subMenuCategories.map((category) =>
            category.isTitle ? (
              <CategoryStyled
                style={{ cursor: "default" }}
                key={category.french}
              >
                {language === "french" ? category.french : category.english}
              </CategoryStyled>
            ) : (
              <SubCategoryStyled
                to={category.link || "/"}
                key={category.english}
              >
                {language === "french" ? category.french : category.english}
              </SubCategoryStyled>
            ),
          )
        : null}
    </SubMenuLaptopStyled>
  );
};

export default SubMenuLaptop;
