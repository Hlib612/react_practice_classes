export default function ButtonLoger(){
    return(
        <>
        <button onClick={(event)=>{
            console.log("Click", event)
        }}>Click me please!!!!!!</button>
        </>
    )
}