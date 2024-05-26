import React, { useState } from 'react';

function Word({ selectedWord, correctLetters }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    // onLetterChange(value); // Notify parent component of letter input
  };

  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    <input
      className="phone"
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      maxLength={1} // Limit input to one character
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
    />
    </div>
  );
}

export default Word;

