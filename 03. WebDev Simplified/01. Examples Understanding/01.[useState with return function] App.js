import { useState } from "react";

function App() {
  const [count, setCount] = useState(() => 4); // By doing this it will useState() hook will only run once.

  function decerementCount() {
    // setCount(count - 1); Incorrect way of updating the sate

    // Correct way of updating the state
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <button onClick={decerementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
