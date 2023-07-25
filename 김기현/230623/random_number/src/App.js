import React, { useState } from 'react';

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const min = 1;
    const max = 100;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(number);
  };

  return (
    <div>
      <h2>Random Number between 1 - 100</h2>
      <button onClick={generateRandomNumber}>Make Random Number</button>
      {randomNumber && <p>Here is the Number I made: {randomNumber}</p>}
    </div>
  );
};

export default RandomNumber;
