import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  // Expensive Calculation
  const expensiveValue = useMemo(() => {
    console.log("Computing Expensive Value...");
    return 100000000 + count
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p><button onClick={() => setCount(count + 1)}>+</button>
      <h3>Expensive Calculation</h3>
      <p> {expensiveValue}</p>
    </div>
  );
};

export default UseMemo;
