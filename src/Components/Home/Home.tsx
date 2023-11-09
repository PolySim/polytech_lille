import { HomeStyled } from "./homeStyled.ts";

const Home = () => {
  return (
    <HomeStyled>
      <video src="/main.mp4" loop autoPlay muted />
      <h1>BIENVENUE A POLYTECH LILLE !</h1>
    </HomeStyled>
  );
};

export default Home;
