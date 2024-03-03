import { useState } from "react";
import SeconComponent from "./SecondComponent";

export default (function FirstComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  console.log("First Component Rendered");
  return (
    <div>
      I'm the First Component
      <button onClick={() => setIsOpen(true)}>Click me</button>
      {isOpen ? <SeconComponent /> : null}
    </div>
  );
});
