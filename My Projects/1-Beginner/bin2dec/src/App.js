import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [binary, setBinary] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const biToDec = array => {
    let reversed = array.reverse();
    let sum = 0;
    let power = 1;
    for (let i = 0; i < array.length; i++) {
      if (i === 0 && reversed[i] === 1) {
        sum = 1;
      } else if (i > 0) {
        power += power;
        if (reversed[i] === 1) {
          sum += power;
        }
      }
    }
    setBinary(sum);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let arr = input.split("").map(x => Number(x));
    let nonNumber = arr.filter(x => isNaN(x));
    let isBinary = arr.filter(x => x === 0 || x === 1);

    if (nonNumber.length > 0 || isBinary.length !== arr.length) {
      setBinary("Only use zero's or one's.");
    } else {
      biToDec(arr);
    }
    setInput("");
  };
  return (
    <div className="App">
      <form onSubmit={e => handleSubmit(e)}>
        <h1>Binary to Decimal Equivilant</h1>
        <input
          type="text"
          placeholder="binary number"
          onChange={e => handleChange(e)}
          value={input}
        />
        <button type="submit">Go!</button>
      </form>
      <h3>
        Decimal Equivilant is: <span className="binary">{binary}</span>
      </h3>
    </div>
  );
}

export default App;
