import { useState } from 'react';

const totalOrders = [30, 42, 45, 34, 21];

function Counter() {
  console.log('Counter function component run ...');

  const [counter, setCounter] = useState(1);
  // pass func in order to run func only one time
  const [total, setTotal] = useState(()=>{
    console.log('func as argument of useState run only one time');
    return totalOrders.reduce((s, x) => s+x);
  });

  const handleIncreaseOneStep = () => {
    // W1. More Correct
    // setCounter(prev => prev +1);

    // W2. Correct
    setCounter(counter + 1);
  }

  const handleIncreaseThreeStep = () => {
    // W1. Correct
    setCounter(prev => prev +1);
    setCounter(prev => prev +1);
    setCounter(prev => prev +1);

    // W2. Wrong
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  }

  const handleIncreaseTotal = () => {
    setTotal(total + 1);
  }

  return (
    <div className="Counter">
      <h1>Welcome</h1>
      <h1>Total: {total}</h1>
      <h1>Counter: {counter}</h1>

      <button onClick={handleIncreaseOneStep}>Increase one step</button>
      <button onClick={handleIncreaseThreeStep}>Increase 3 steps</button>
      <button onClick={handleIncreaseTotal}>Increase total</button>
    </div>
  );
}

export default Counter;

/**
 * 1. useState
 * - When set new value for states
 *  -> React will asynchronously update states
 *  -> After states are really changed
 *  -> Mutate Virtual DOM
 *  -> others .... 
 *  -> Render real DOM (real UI)
 *  -> others ....
 *  
 *  
 * - Set state
 *  - Want to change state with independent value --> setXXX(value)
 *  - Want to change state with dependent value with previous one --> setXXX(prev => ...)
 * 
 */
