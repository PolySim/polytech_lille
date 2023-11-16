import { WelcomeStyled } from "@/Components/Home/homeStyled.ts";
import { welcome } from "@/Data/home.ts";
import { MainContext } from "@/context.ts";
import { useContext } from "react";

const Welcome = () => {
  const { language } = useContext(MainContext);

  return (
    <WelcomeStyled>
      <h1>
        {language === "french" ? welcome.title.french : welcome.title.english}
      </h1>
    </WelcomeStyled>
  );
};

export default Welcome;
