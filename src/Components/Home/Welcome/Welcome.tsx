import { WelcomeContent, WelcomeStyled } from "@/Components/Home/homeStyled.ts";
import { welcome } from "@/Data/home.ts";
import { MainContext } from "@/Context/context.ts";
import { useContext } from "react";

const Welcome = () => {
  const { language } = useContext(MainContext);

  return (
    <WelcomeStyled>
      <WelcomeContent>
        <h4>
          {language === "french"
            ? welcome.leftContent.title.french
            : welcome.leftContent.title.english}
        </h4>
        <p>
          {language === "french"
            ? welcome.leftContent.french.split("\n").map((item, i) => (
                <span key={i}>
                  {item}
                  <br />
                </span>
              ))
            : welcome.leftContent.english.split("\n").map((item, i) => (
                <span key={i}>
                  {item}
                  <br />
                </span>
              ))}
        </p>
      </WelcomeContent>
      <WelcomeContent>
        <h4>
          {language === "french"
            ? welcome.rightContent.title.french
            : welcome.rightContent.title.english}
        </h4>
        <p>
          {language === "french"
            ? welcome.rightContent.french.split("\n").map((item, i) => (
                <span key={i}>
                  {item}
                  <br />
                </span>
              ))
            : welcome.rightContent.english.split("\n").map((item, i) => (
                <span key={i}>
                  {item}
                  <br />
                </span>
              ))}
        </p>
        <img
          src="https://www.polytech-lille.fr/wp-content/uploads/2021/02/rentree2.jpg"
          alt="Polytech student"
        />
      </WelcomeContent>
    </WelcomeStyled>
  );
};

export default Welcome;
