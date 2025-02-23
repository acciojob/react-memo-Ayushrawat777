import React, { useState } from 'react'

const ReactMemo = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([])
    console.log(input)

    const handleOnChange = (e)=> {
        setInput(e.target.value)
    }

    const handleClick = ()=> {
        if(input.length>5) {
            setList([...list, input]);
        }
        setInput("");
    }
    
  return (
    <div>
        <h1>React.memo</h1>
        <div>
            <span>
            <input type='text' value={input} onChange={handleOnChange}/>
            <button onClick={handleClick}>Add Skill</button>
            </span>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default  ReactMemo
