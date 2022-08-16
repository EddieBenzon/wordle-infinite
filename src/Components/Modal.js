import React from "react";

const Modal = ({ victory, solution }) => {
  const newGame = () => {
    window.location.reload(false);
  };

  return (
    <div className="modal-wrapper">
      {victory && (
        <div className="modal">
          <h4>You win!</h4>
          <p>
            The answer was <span className="span-win">{solution}.</span>
          </p>
          <button className="btn-new-game" onClick={newGame}>
            New Game
          </button>
        </div>
      )}
      {!victory && (
        <div className="modal">
          <h4>Out of guesses!</h4>
          <p>
            The answer was <span className="span-loss">{solution}.</span>
          </p>
          <button className="btn-new-game" onClick={newGame}>
            New Game
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
