import React from "react";
import GridRow from "./GridRow";

const GameGrid = ({ currentGuess, guesses, turn }) => {
  return (
    <section className={"game-grid"}>
      {guesses.map((item, id) => {
        if (turn === id) {
          return <GridRow key={id} currentGuess={currentGuess} />;
        }
        return <GridRow key={id} guess={item} />;
      })}
    </section>
  );
};

export default GameGrid;
