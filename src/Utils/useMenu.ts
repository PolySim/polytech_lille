import { useState } from "react";
import { Menu, MenuOpen } from "@/type.ts";

export const useMenu: () => Menu = () => {
  const [menu, setMenu] = useState<MenuOpen>({
    menu: false,
    submenu: undefined,
  });

  const toggleOpen = (menu: "menu" | "submenu" | "both", submenu?: number) => {
    switch (menu) {
      case "menu":
        setMenu((curr) => ({ ...curr, menu: !curr.menu }));
        break;
      case "submenu":
        setMenu((curr) => ({
          ...curr,
          submenu: submenu,
        }));
        break;
      case "both":
        setMenu((curr) => ({
          menu: !curr.menu,
          submenu: submenu,
        }));
        break;
    }
  };

  return {
    isOpen: menu,
    toggleOpen,
  };
};
