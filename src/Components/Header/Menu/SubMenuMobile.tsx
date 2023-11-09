import { menuCategories } from "@/Data/menuCategories.ts";
import {
  CategoryStyled,
  SubmenuStyled,
} from "@/Components/Header/headerStyled.ts";

const SubMenuMobile = ({
  toggleSubMenu,
  categoryName,
}: {
  toggleSubMenu: (category: string) => void;
  categoryName: string;
}) => {
  const subMenuCategories = menuCategories.find(
    (category) => category.english === categoryName,
  )?.submenu;

  return (
    <SubmenuStyled $isOpen={categoryName !== ""}>
      {subMenuCategories ? (
        subMenuCategories.map((category) => (
          <CategoryStyled
            $last={false}
            key={category.english}
            onClick={() => toggleSubMenu("")}
          >
            {category.french}
          </CategoryStyled>
        ))
      ) : (
        <></>
      )}
    </SubmenuStyled>
  );
};

export default SubMenuMobile;
