import { useState } from "react";

type useScrolling = {
  top: number;
  toggleScroll: (top: number) => void;
};

export const useScroll = (): useScrolling => {
  const [scroll, setScroll] = useState({
    top: 0,
  });

  const toggleScroll = (top: number) => {
    const timeout = setTimeout(() => {
      console.log(top);
    }, 200);

    return () => clearTimeout(timeout);
  };

  return { top: scroll.top, toggleScroll: toggleScroll };
};
