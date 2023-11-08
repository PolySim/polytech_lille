import { HomeStyled } from "./homeStyled.ts";

const Home = () => {
  return (
    <HomeStyled>
      <video src="/main.mp4" loop autoPlay muted />
    </HomeStyled>
  );
};

export default Home;
