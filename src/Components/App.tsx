import Header from "./Header/Header.tsx";
import Home from "./Home/Home.tsx";
import { MainContext } from "@/context.ts";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [language, setLanguage] = useState<"french" | "english">("french");

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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
