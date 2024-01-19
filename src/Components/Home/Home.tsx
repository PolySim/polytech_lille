import { HomeContainer, HomeContent, HomeStyled } from "./homeStyled.ts";
import Welcome from "@/Components/Home/Welcome/Welcome.tsx";
import { useScroll } from "@/Utils/useScroll.ts";

const Home = () => {
  const { toggleScroll } = useScroll();

  return (
    <HomeContainer onScroll={(e) => toggleScroll(e.currentTarget.scrollTop)}>
      <HomeStyled>
        <video src="/main.mp4" loop autoPlay muted />
        <h1>BIENVENUE A POLYTECH LILLE !</h1>
      </HomeStyled>
      <HomeContent>
        <Welcome />
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
