import { useState } from "react";

export default function SecondChildComponent(props) {
  const [isOpen, setOpen] = useState(false);
  console.log("Second Child Component Rendered");
  return (
    <div>
      I'm the Second Component
      <button onClick={() => setOpen(true)}>Click Me!</button>
      {isOpen ? <p>I'm being called</p> : null}
      {props.child}
    </div>
  );
}
