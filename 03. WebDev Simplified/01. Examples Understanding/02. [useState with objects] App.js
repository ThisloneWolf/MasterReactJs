import { useState } from "react";

function App() {
  // When using object in useState() hook
  const [obj, setObj] = useState({ count: 4, theme: "blue" });

  function decerementCount() {
    /**
     * Wrong way of doing, here in function based components, 
     *  object merging doesn't happen, whereas in class based components it works
     *  setObj((prevObj) => {
     *  return { count: prevObj.count - 1 };
    });
     */

    // correct way destructure previous state, and then set new state
    setObj((prevObj) => {
      return { ...prevObj, count: prevObj.count - 1 };
    });
  }

  function incrementCount() {
    setObj((prevObj) => {
      return { ...prevObj, count: prevObj.count + 1 };
    });
  }
  return (
    <div>
      <button onClick={decerementCount}>-</button>
      <span>{obj.count}</span>
      <span>{obj.theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
