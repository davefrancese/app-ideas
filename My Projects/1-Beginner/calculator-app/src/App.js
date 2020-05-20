import React, { useState } from "react";
import "./App.css";
import "./calculator.css";

function App() {
  const [sequence, setSequence] = useState([]);
  const [number, setNumber] = useState([]);
  const [displayValue, setDisplayValue] = useState(0);
  let show = 0;

  const handleNumberClick = e => {
    e.preventDefault();
    let x = e.target.value;
    number.push(Number(x));
    show = number.join("");
    setDisplayValue(show);
    console.log("number", number);
    console.log("sequence", sequence);
  };

  const handleOperatorClick = e => {
    e.preventDefault();
    sequence.push(number);
    sequence.push(e.target.value);
    setNumber([]);
    console.log(sequence);
  };

  const handleAllClear = () => {
    setSequence([]);
    setDisplayValue(0);
    setNumber([]);
  };

  const clearNumber = () => {
    setNumber([]);
  };

  const solve = () => {
    // all even index are numbers
    // all odd index are operators
    console.log("solving");
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <main className="calculator">
        <section className="screen">
          <input type="text" value={displayValue} readOnly />
        </section>
        <section className="buttons">
          <button
            className="btn-1 number"
            value={1}
            onClick={e => handleNumberClick(e)}
          >
            1
          </button>
          <button
            className="btn-2 number"
            value={2}
            onClick={e => handleNumberClick(e)}
          >
            2
          </button>
          <button
            className="btn-3 number"
            value={3}
            onClick={e => handleNumberClick(e)}
          >
            3
          </button>
          <button
            className="btn-4 number"
            value={4}
            onClick={e => handleNumberClick(e)}
          >
            4
          </button>
          <button
            className="btn-5 number"
            value={5}
            onClick={e => handleNumberClick(e)}
          >
            5
          </button>
          <button
            className="btn-6 number"
            value={6}
            onClick={e => handleNumberClick(e)}
          >
            6
          </button>
          <button
            className="btn-7 number"
            value={7}
            onClick={e => handleNumberClick(e)}
          >
            7
          </button>
          <button
            className="btn-8 number"
            value={8}
            onClick={e => handleNumberClick(e)}
          >
            8
          </button>
          <button
            className="btn-9 number"
            value={9}
            onClick={e => handleNumberClick(e)}
          >
            9
          </button>
          <button
            className="btn-+ operator"
            value="+"
            onClick={e => handleOperatorClick(e)}
          >
            +
          </button>
          <button
            className="btn-0 number"
            value={0}
            onClick={e => handleNumberClick(e)}
          >
            0
          </button>

          <button
            className="btn-- operator"
            value="-"
            onClick={e => handleOperatorClick(e)}
          >
            -
          </button>
          <button
            className="btn-* operator"
            value="*"
            onClick={e => handleOperatorClick(e)}
          >
            *
          </button>
          <button
            className="btn-/ operator"
            value="/"
            onClick={e => handleOperatorClick(e)}
          >
            /
          </button>
          <button
            className="btn-equal operator"
            value="="
            onClick={() => solve()}
          >
            =
          </button>
          <button className="btn-c clear" onClick={() => clearNumber()}>
            C
          </button>
          <button
            className="btn-dec number"
            value="."
            onClick={e => handleNumberClick(e)}
          >
            .
          </button>
          <button className="btn-ac clear" onClick={() => handleAllClear()}>
            AC
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
