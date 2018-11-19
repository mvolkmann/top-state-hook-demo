import React from 'react';
import {useTopState} from 'top-state-hook';

export default function Counter() {
  const [count, countUpdate] = useTopState('count', 0);
  return (
    <div>
      <button onClick={() => countUpdate.decrement()} disabled={count === 0}>
        -
      </button>
      {count}
      <button onClick={() => countUpdate.increment()}>+</button>
    </div>
  );
}
