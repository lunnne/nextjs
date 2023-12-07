'use client';

import React, { useState } from 'react';

export default function Counter() {
    console.log('Hi - client');
    
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>count up</button>
    </>
  );
}
