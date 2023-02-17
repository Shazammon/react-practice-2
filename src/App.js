import React, { useState } from "react";

function countInitial() {
  console.log('run function')
  return 4
}

function App() {
  // const [ count, setCount ] = useState(() => {
  //   console.log('function was run') 
  //   return 4
  // })

  // const [ count, setCount ] = useState(countInitial())
  const [ state, setState ] = useState({count: 4, theme: 'blue'})
  const count = state.count
  const theme = state.theme


  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
