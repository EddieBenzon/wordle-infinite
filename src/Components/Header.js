import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { IconContext } from "react-icons";

const Header = ({ howTo, setHowTo }) => {
  const [dark, setDark] = useState(false);
  const { darkMode, setDarkMode } = useGlobalContext();

  const toggleDark = () => {
    if (darkMode === false) {
      setDarkMode(true);
      return;
    }
    if (darkMode === true) {
      setDarkMode(false);
      return;
    }
  };

  useEffect(() => {
    toggleDark();
  }, [dark]);

  return (
    <div className={darkMode ? "header-dark" : "header"}>
      <div className="dark-mode-wrapper">
        <IconContext.Provider
          value={{ className: `${darkMode ? "dark-icon" : "light-icon"}` }}
        >
          <WiMoonAltThirdQuarter />
        </IconContext.Provider>
        <label className="switch" onClick={() => setDark(!dark)}>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="title-wrapper">
        <h2>Wordle</h2>
        <span>Infinite</span>
      </div>
      <button onClick={() => setHowTo(true)}>How to play</button>
    </div>
  );
};

export default Header;
