import { useState } from "react"
export default function Click(){
    function Counter(){
const [count, setCount] = useState(0)
const increase = () =>{
    setCount(count + 1)
}
const decrease = () =>{
    setCount(count - 1)
}

    return(
        <>
        <h2>{count}</h2>
        <button onClick={increase}>Add 1</button>
        <button onClick={decrease}>Substract 1</button>
        </>
    )
}
return <Counter/>
}