import { useState } from "react";
export default function TogleBtn(){
const [isOn, togle] = useState(false);

const turned = () =>{
togle(!isOn)
}

return(
    <>
    <button onClick={turned}
    className={
        isOn ? "clasOn" : 'clasOff'
    }>{isOn ? "On" : "Off"}</button>
    </>
)
}
//   style={{
//         backgroundColor : isOn ? "green" : "red",
//     }}