import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  // console.log(guesses);
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
