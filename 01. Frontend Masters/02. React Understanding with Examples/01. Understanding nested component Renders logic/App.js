import { useState } from "react";
import "./App.css";
import FirstComponent from "./FirstComponent";
import SeconComponent from "./SecondComponent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  console.log("App component rendered");
  return (
    <div className="App">
      <div>Understanding How Re-renders works</div>
      <p>
        Note even though state is changed in App, the following children
        components will be re-rendered
      </p>
      <p>It doesn't matter props are being passed or not or changed</p>
      <p>
        If a component re-renders, all the nested components below it will
        re-rendered!
      </p>
      <header className="App-header">Im the Main App Component</header>
      <button onClick={() => setIsOpen(true)}>Click me</button>
      <FirstComponent />
      {isOpen ? <SeconComponent /> : null}
    </div>
  );
}

export default App;
