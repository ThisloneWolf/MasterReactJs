import "./App.css";
import FirstComponent from "./FirstComponent";

function App() {
  console.log("App component rendered");
  return (
    <div className="App">
      <div>Understanding How Re-renders works</div>
      <p>
        Note just by passing the state down i.e using the{" "}
        <b>Moving State Down Pattern</b> we can solve the re-renders of our
        Nested Component. Here our App Component Didn't rendered Again !
      </p>
      <p>This is called Component Composition or say Code splitting</p>
      <header className="App-header">Im the Main App Component</header>
      <FirstComponent />
    </div>
  );
}

export default App;
