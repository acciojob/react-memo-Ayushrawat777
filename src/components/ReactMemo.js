import React, { useState } from 'react'
import { memo } from "react";

const ReactMemo = ({skills}) => {
  console.log("child render");
  return (
    <div>
      <ul>
        {skills.map((val,index)=>{
          return <li key={index}>{val}</li>
        })}
      </ul>
    </div>
  )
}

export default memo(ReactMemo);
