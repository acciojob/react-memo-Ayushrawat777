import React, { useEffect, useState } from 'react'
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
    const [todo, setTodo] = useState(["New todo"]);
    const [count, setCount] = useState(0);

    const onclickHandler = (e)=>{
        setTodo([...todo, "New todo"]);
    }

    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <>
    <div>
        <h1>React.useMemo</h1>
        <h2>My todos</h2>
        <ul>
            {todo.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={onclickHandler} >Add Todo</button>
    </div>
    <hr />
    <div>
        <p>Count: {count}<span><button onClick={handleClick}>+</button></span></p>
    </div>

    <UseMemo count={count} />

    <hr />
    <hr />

    <ReactMemo />

    </>
  )
}

export default App
