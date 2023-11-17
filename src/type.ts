export type MainContextType = {
  language: "french" | "english";
  handlerLanguage: () => void;
};

export type MenuOpen = { menu: boolean; submenu: number | undefined };

export type Menu = {
  isOpen: MenuOpen;
  toggleOpen: (menu: "menu" | "submenu" | "both", submenu?: number) => void;
};

export type MenuContextType = Menu;
