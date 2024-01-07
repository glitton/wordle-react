import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  }
  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        type='text'
        id='guess-input'
        minLength={5}
        maxLength={5}
        pattern='[A-Za-z]{5}'
        title='5 letter word'
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;