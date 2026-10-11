import { useState } from "react"



function App(){
let [color,changeColor] = new useState("olive")
function change(newOne)
{
  color = newOne
  changeColor(color)

}
  return(
    <>
    <div className="h-200 w-200 " style={{backgroundColor:color}}>
hey mere ko color karo 
    </div>
    <div>

    </div>
    <button style={{backgroundColor:"red"}} onClick={()=>change("red")}>Red</button>
    <button  style={{backgroundColor:"blue"}} onClick={()=>change("blue")}>blue</button>
    <button  style={{backgroundColor:"yellow"}} onClick={()=>change("yellow")}>yellow </button>


    </>
  )
}
export default App