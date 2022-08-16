import React from "react";
import { useGlobalContext } from "./context";

const GridRow = ({ guess, currentGuess }) => {
  const { darkMode } = useGlobalContext();

  if (guess) {
    return (
      <div className="grid-row past">
        {guess.map((item, index) => (
          <div className={`grid-letter ${item.color}`} key={index}>
            {item.value}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className="grid-row current">
        {letters.map((letter, index) => {
          return (
            <div
              className={`grid-letter ${darkMode ? "dark" : ""} ${
                darkMode ? "filled-dark" : "filled"
              }`}
              key={index}
            >
              {letter}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((item, index) => {
          return (
            <div
              className={`grid-letter ${darkMode ? "dark" : ""}`}
              key={index}
            ></div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid-row">
      <div className={`grid-letter ${darkMode ? "dark" : ""}`}></div>
      <div className={`grid-letter ${darkMode ? "dark" : ""}`}></div>
      <div className={`grid-letter ${darkMode ? "dark" : ""}`}></div>
      <div className={`grid-letter ${darkMode ? "dark" : ""}`}></div>
      <div className={`grid-letter ${darkMode ? "dark" : ""}`}></div>
    </div>
  );
};

export default GridRow;
