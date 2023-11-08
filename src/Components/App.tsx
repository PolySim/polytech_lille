import Header from "./Header/Header.tsx";
import Home from "./Home/Home.tsx";
import { MainContext } from "@/context.ts";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("french");

  const handlerLanguage = () => {
    setLanguage((curr) => (curr === "french" ? "english" : "french"));
  };

  return (
    <MainContext.Provider
      value={{
        language,
        handlerLanguage,
      }}
    >
      <Header />
      <Home />
    </MainContext.Provider>
  );
}

export default App;
