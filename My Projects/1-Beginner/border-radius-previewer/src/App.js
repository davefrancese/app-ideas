import React, { useState } from "react";
import "./App.css";

function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  const change = (e, corner) => {
    e.preventDefault();
    corner(Number(e.target.value));
  };

  const styles = {
    borderTopLeftRadius: `${topLeft}px`,
    borderTopRightRadius: `${topRight}px`,
    borderBottomRightRadius: `${bottomRight}px`,
    borderBottomLeftRadius: `${bottomLeft}px`
  };

  return (
    <div className="App">
      <h1>Border Radius Previewer</h1>
      <div className="content">
        <input
          type="number"
          className="top-left"
          onChange={(e, corner) => change(e, setTopLeft)}
        />
        <input
          type="number"
          className="top-right"
          onChange={(e, corner) => change(e, setTopRight)}
        />
        <div className="preview" style={styles}>
          {`border-radius: ${topLeft}px, ${topRight}px, ${bottomRight}px, ${bottomLeft}px;`}
        </div>
        <input
          type="number"
          className="bottom-left"
          onChange={(e, corner) => change(e, setBottomLeft)}
        />
        <input
          type="number"
          className="bottom-right"
          onChange={(e, corner) => change(e, setBottomRight)}
        />
      </div>
    </div>
  );
}

export default App;
