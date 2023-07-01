import React, { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounterParentFunction(by){
       setCount(count + by);
  }
  function decrementCounterParentFunction(by){
        setCount(count - by);
  }
  function resetCounter(){
        setCount(0);
  }
  return (
    <div>
      <span className='count'>{count}</span>
      <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
      <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
      <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
      <button className='resetButton' onClick={resetCounter}>Reset</button>

    </div>
  )
}