import React from "react";

const HowToPlay = ({ setHowTo }) => {
  return (
    <div className="how-to-wrapper">
      <h3>Guess the solution in 6 tries or less.</h3>
      <p>Each guess must be a valid 5-letter word.</p>
      <p>
        When you submit a guess, the letters will change colors to indicate how
        close you are to the solution.
      </p>
      <div className="grid-letter grey">L</div>
      <p>Grey color means the letter is not in the solution.</p>
      <div className="grid-letter orange">N</div>
      <p>
        Orange color means the letter is in the solution, but in another spot.
      </p>
      <div className="grid-letter green">W</div>
      <p>
        Green color means the letter is in the solution and in the correct spot.
      </p>
      <p>Have fun!</p>
      <button onClick={() => setHowTo(false)}>Back to Game</button>
    </div>
  );
};

export default HowToPlay;
