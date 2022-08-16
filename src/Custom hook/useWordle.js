import { useState } from "react";
import { solutions } from "../solutions";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [victory, setVictory] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});
  const [invalidWord, setInvalidWord] = useState(false);

  const checkGuess = (word) => {
    let check = solutions.some((item) => {
      return item.toUpperCase() === word.toUpperCase();
    });
    return check;
  };

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { value: letter, color: "grey" };
    });
    // find green letters (match)
    formattedGuess.forEach((item, index) => {
      if (solutionArray[index] === item.value) {
        formattedGuess[index].color = "green";
        solutionArray[index] = null;
      }
    });
    // find orange letters
    formattedGuess.forEach((item, index) => {
      if (solutionArray.includes(item.value) && item.color !== "green") {
        formattedGuess[index].color = "orange";
        solutionArray[solutionArray.indexOf(item.value)] = null;
      }
    });
    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setVictory(true);
    }
    let valid = checkGuess(currentGuess);
    if (valid === false) {
      setInvalidWord(true);
      setTimeout(() => {
        setInvalidWord(false);
      }, 1000);
      return;
    }
    setGuesses((previousGuesses) => {
      let newGuessesArray = [...previousGuesses];
      newGuessesArray[turn] = formattedGuess;
      return newGuessesArray;
    });
    setTurn((turn) => turn + 1);

    setUsedKeys((prevKeys) => {
      let newKeys = { ...prevKeys };
      formattedGuess.forEach((item) => {
        const currentColor = newKeys[item.value];

        if (item.color === "green") {
          newKeys[item.value] = "green";
          return;
        }
        if (item.color === "orange" && currentColor !== "green") {
          newKeys[item.value] = "orange";
          return;
        }
        if (
          item.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "orange"
        ) {
          newKeys[item.value] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  const handleKeyup = ({ key }) => {
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (key === "Enter") {
      if (turn > 5) {
        return;
      }
      if (currentGuess.length !== 5) {
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key.toUpperCase();
        });
      } else if (currentGuess.length === 5) return;
    }
  };

  // keyboard functions start -----------------

  const removeKey = () => {
    setCurrentGuess((prev) => {
      return prev.slice(0, -1);
    });
  };
  const addKey = (e) => {
    const newKey = e.target.innerHTML;
    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => {
        return prev + newKey.toUpperCase();
      });
    } else if (currentGuess.length === 5) return;
  };
  const handleSubmit = () => {
    if (turn > 5) {
      return;
    }
    if (currentGuess.length !== 5) {
      return;
    }
    const formatted = formatGuess();
    addNewGuess(formatted);
  };

  //keyboard functions end --------------------
  return {
    turn,
    currentGuess,
    guesses,
    victory,
    usedKeys,
    invalidWord,
    handleKeyup,
    removeKey,
    addKey,
    handleSubmit,
  };
};

export default useWordle;
