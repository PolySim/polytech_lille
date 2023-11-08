import { CategoryStyled, MenuMobileStyled } from "./headerStyled.ts";
import { categories } from "@/Components/Header/categories.ts";

const MenuMobile = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <MenuMobileStyled $isOpen={isOpen}>
      {categories.map((category, index) => (
        <CategoryStyled $last={index + 1 === categories.length}>
          {category.french}
        </CategoryStyled>
      ))}
    </MenuMobileStyled>
  );
};

export default MenuMobile;
