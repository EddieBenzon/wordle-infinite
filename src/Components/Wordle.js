import React, { useEffect, useState } from "react";
import Header from "./Header";
import useWordle from "../Custom hook/useWordle";
import Modal from "./Modal";
import GameGrid from "./GameGrid";
import Keyboard from "./Keyboard";
import HowToPlay from "./HowToPlay";
import InvalidWord from "./InvalidWord";

const Wordle = ({ solution }) => {
  const {
    currentGuess,
    guesses,
    victory,
    turn,
    usedKeys,
    invalidWord,
    handleKeyup,
    removeKey,
    addKey,
    handleSubmit,
  } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);
  const [howTo, setHowTo] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    if (victory) {
      setTimeout(() => {
        setShowModal(true);
      }, 1200);
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 1200);
      window.removeEventListener("keyup", handleKeyup);
    }
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup, victory, turn]);

  return (
    <>
      <Header howTo={howTo} setHowTo={setHowTo} />
      {showModal && <Modal victory={victory} solution={solution} />}
      {howTo && <HowToPlay howTo={howTo} setHowTo={setHowTo} />}
      <div className="game-wrapper">
        <GameGrid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keyboard
          usedKeys={usedKeys}
          removeKey={removeKey}
          addKey={addKey}
          handleSubmit={handleSubmit}
        />
      </div>
      {invalidWord && <InvalidWord />}
    </>
  );
};

export default Wordle;
