import { createContext } from "react";
import { MenuContextType } from "@/type.ts";

export const MenuContext = createContext<MenuContextType>({
  isOpen: {
    menu: false,
    submenu: undefined,
  },
  toggleOpen: () => {},
});
