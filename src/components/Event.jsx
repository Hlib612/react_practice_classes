export default function Event(){
    function HandleClick(event){
        console.log(event)
        console.log("Кнопку натиснули")
    }
    return(
        <>
        <button onClick={HandleClick}>Click me</button>
        </>
    )
}