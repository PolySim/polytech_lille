import { MenuLaptopStyled } from "./headerStyled.ts";
import { categories } from "@/Components/Header/categories.ts";

const MenuLaptop = () => {
  return (
    <MenuLaptopStyled>
      {categories.map((category) => (
        <p>{category.french}</p>
      ))}
    </MenuLaptopStyled>
  );
};

export default MenuLaptop;
