import "./App.css";
import ChildComponent from "./ChildComponent";
import SecondChildComponent from "./SecondChildComponent";

function App() {
  console.log("App component rendered");
  return (
    <div className="App">
      <div>Understanding How Re-renders works</div>
      <p>
        Passing component as Prop to other component to have good performance !
      </p>
      <p>
        Notice even though on clicking button states get changed but the nested
        component inside Second Child which is FirstComponent is not rendered
        again in console, since it is maintaing the same reference as it is
        passed as prop !!
      </p>
      <header className="App-header">Im the Main App Component</header>
      <SecondChildComponent child={(props) => <ChildComponent {...props} />} />
    </div>
  );
}

export default App;
