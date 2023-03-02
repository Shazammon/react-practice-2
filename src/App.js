import React, { useState } from "react";

function countInitial() {
  console.log('run function')
  return 4
  
}

// function AppTwo() {
//   const [count, setCount] = useState(4)
// }

function App() {
  // const [ count, setCount ] = useState(() => {
  //   console.log('function was run') 
  //   return 4
  // })

  // const [ count, setCount ] = useState(countInitial())
  const [ count, setCount ] = useState(4)
  const [ theme, setTheme ] = useState('blue')
  // const [ state, setState ] = useState({count: 4, theme: 'blue'})
  // const count = state.count
  // const theme = state.theme


  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('red')
    // setState(prevState => {
    //   return { ...prevState, count: prevState.count - 1 }
    // })
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('blue')
  }

  return (
    <>
    <button onClick={() => {setCount(prevCount => prevCount - 1)}}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    {/* <button onClick={incrementCount}>+</button> */}
    <button onClick={() => {setCount(prevCount => prevCount + 1)}}>+</button>
    </>
  );
}

export default App;
