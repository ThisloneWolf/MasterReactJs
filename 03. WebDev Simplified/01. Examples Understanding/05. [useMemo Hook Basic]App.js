import { useState, useMemo } from "react";
import Child from "./Child";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
      <Child />
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000; i++) {}
  return num * 2;
}

export default App;
