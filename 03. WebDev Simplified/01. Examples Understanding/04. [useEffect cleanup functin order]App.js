import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWidthWidth] = useState(window.innerWidth);

  /**
   * What's important thing to note here is the order of clean up function
   * i.e  render function ---> cleanup function ----> useEffect
   * or say cleanup function runs before useEffect, when component gets unmounted
   */

  const handleResize = () => {
    setWidthWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // clean up function when this component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}

export default App;
