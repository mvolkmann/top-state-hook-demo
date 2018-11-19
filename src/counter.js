import React from 'react';
import {useTopState} from 'top-state-hook';

export default function Counter() {
  const [count, setCount] = useTopState('count', 0);
  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
