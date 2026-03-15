import React from "react"
export default class BtnLogger extends React.Component{
     handelClick = (event) =>{
        console.log("Well well well", event)
    }
    render(){
    return(
        <>
        <button onClick={this.handelClick}>Well well well</button>
        </>
    )
}}