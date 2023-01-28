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
    setCounter(counter + 1);
  }

  const handleIncreaseThreeStep = () => {
    setCounter(prev => prev +1);
    setCounter(prev => prev +1);
    setCounter(prev => prev +1);
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
