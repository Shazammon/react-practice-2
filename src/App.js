import React, { useState } from "react";

function App() {
  const [ count, setCount ] = useState(4)

  return (
    <>
    <button>-</button>
    <span>0</span>
    <button>+</button>
    </>
  );
}

export default App;
