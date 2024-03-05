import { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  console.log("App rendered !");
  useEffect(() => {
    console.log("render");
  }, [resourceType]);

  return (
    <div>
      <h1>{resourceType}</h1>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
    </div>
  );
}

export default App;
