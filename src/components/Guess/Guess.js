import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function Guess({ guesses }) {
  // console.log("the guess", guesses);
  const noGuess = guesses.length === 0;
  return (
    <div className='guess-results'>
      {noGuess
        ? range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
            return (
              <p className='guess' key={index}>
                <span className='cell'></span>
                <span className='cell'></span>
                <span className='cell'></span>
                <span className='cell'></span>
                <span className='cell'></span>
              </p>
            );
          })
        : range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
            return (
              <p className='guess' key={index}>
                <span className='cell'>g</span>
                <span className='cell'>u</span>
                <span className='cell'>e</span>
                <span className='cell'>s</span>
                <span className='cell'>s</span>
              </p>
            );
          })}
    </div>
  );
}

export default Guess;
