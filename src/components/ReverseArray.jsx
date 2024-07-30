import React, { useState } from "react";

const ReverseArray = () => {
  const [inputArray, setInputArray] = useState("");
  const [reversedArray, setReversedArray] = useState([]);

  const handleReverse = () => {
    const reversedArray = [];
    for (let i = inputArray.length - 1; i >= 0; i--) {
      reversedArray.push(inputArray[i]);
    }
    setReversedArray(reversedArray);
  };

  return (
    <div>
      <h2>Reverse Array</h2>
      <input
        type="text"
        value={inputArray}
        onChange={(e) => setInputArray(e.target.value)}
        placeholder="Enter comma-separated values"
      />
      <button onClick={handleReverse}>Reverse</button>
      <div>
        <h3>Reversed Array:</h3>
        <p>{reversedArray}</p>
      </div>
    </div>
  );
};

export default ReverseArray;
