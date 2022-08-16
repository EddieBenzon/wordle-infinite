import React from "react";
import { MdOutlineBackspace } from "react-icons/md";
import { AiOutlineEnter } from "react-icons/ai";
import { IconContext } from "react-icons";
import { topRowKeys, midRowKeys, botRowKeys } from "../keyboardData";

const Keyboard = ({ removeKey, addKey, handleSubmit, usedKeys }) => {
  return (
    <section className="keyboard">
      <section className="upper-row">
        {topRowKeys.map((item) => {
          const { value, id } = item;
          const color = usedKeys[item.value];
          return (
            <button
              className={`keyboard-button ${color}`}
              key={id}
              onClick={addKey}
            >
              {value}
            </button>
          );
        })}
      </section>
      <section className="middle-row">
        {midRowKeys.map((item) => {
          const { value, id } = item;
          const color = usedKeys[item.value];
          return (
            <button
              className={`keyboard-button ${color}`}
              key={id}
              onClick={addKey}
            >
              {value}
            </button>
          );
        })}
      </section>
      <section className="bottom-row">
        <button className="keyboard-button-enter" onClick={handleSubmit}>
          <IconContext.Provider value={{ className: "icon-style" }}>
            <AiOutlineEnter />
          </IconContext.Provider>
        </button>
        {botRowKeys.map((item) => {
          const { value, id } = item;
          const color = usedKeys[item.value];
          return (
            <button
              className={`keyboard-button ${color}`}
              key={id}
              onClick={addKey}
            >
              {value}
            </button>
          );
        })}
        <button className="keyboard-button-backspace" onClick={removeKey}>
          <IconContext.Provider value={{ className: "icon-style" }}>
            <MdOutlineBackspace />
          </IconContext.Provider>
        </button>
      </section>
    </section>
  );
};

export default Keyboard;
