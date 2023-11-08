import { HeaderStyled } from "./headerStyled.ts";
import { useEffect, useState } from "react";
import Sponsor from "./Sponsor.tsx";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderStyled>
      <div>
        <img src="/polytechlille.png" alt="Main logo Polytech Lille" />
      </div>
      {width > 768 ? <Sponsor /> : null}
    </HeaderStyled>
  );
};

export default Header;
