import React, { useEffect, useState } from "react";
import { solutions } from "./solutions";
import Wordle from "./Components/Wordle";
import { useGlobalContext } from "./Components/context";

function App() {
  const [solution, setSolution] = useState(null);
  const { darkMode } = useGlobalContext();

  useEffect(() => {
    document.title = "Wordle Infinite";
    const newSolution = solutions[Math.floor(Math.random() * solutions.length)];
    setSolution(newSolution.toUpperCase());
  }, []);

  return (
    <div className={darkMode ? "app-dark" : "app"}>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
