import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!!!</strong>
        {"  "}You won the game in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
