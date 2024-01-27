import { useState } from "react";

export function Counter() {
    let [count,setCount] = useState(1);

    function Increase(){
        setCount(count + 1);
    }

    function Decrease(){
        setCount(count - 1);
    }

    return (
        <>
        <p>Count : {count}</p>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        </>
    )
  }
  
  