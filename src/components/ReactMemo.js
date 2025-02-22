import React, { memo } from "react";

// Memoized component to prevent unnecessary re-renders
const ReactMemo =({ todo }) => {
  console.log("Rendering Todo List...");
  return (
    <>
      {todo.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
}

export default ReactMemo;
