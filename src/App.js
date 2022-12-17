import React, {useState} from 'react';
import './App.css';

const App = ({initialCount}) => {

const [count, setCount]= useState(initialCount)

const deCrement = () => {
     setCount(prevCount => prevCount - 1)
}


 return (
  <>
  <h1>Count {count}</h1>
  <button onClick={() => setCount(count+1)}>Increment +</button>
  <button onClick={ deCrement }>Decrement -</button>
  <button onClick={() => setCount(initialCount)}>Reset</button>
  </>
 )

}

export default App
