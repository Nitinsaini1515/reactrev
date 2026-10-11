// // import React from "react"

// // let counter = 0;
// // function incre (){
// //   counter+=1;
// //   console.log(counter)
// // }
// // function decre(){
// //   counter-=1;
// //   console.log(counter)
// // }
// // function App() {
// //  return ( <>
// //   <button onClick={()=>incre()}>increment button</button>
// //   <div>counter is {counter}</div>
// //   <button onClick={()=>decre()} >Decrement button</button>
// //   </>)
// // }

// // export default App

// // import React from "react";

// import { useState } from "react"
// function App(){
// let [count , setCount] = useState(0);
// function incre(){
//   count +=1;
//   setCount(count)
//   }
//   function decre(){
//     count-=1
//     if(count<0){
//       alert("sorry you cannot make it as negative")
//       count =0;
//     }
//     setCount(count);
//   }
//   return(
//     <>
//     <div>
//       <button  onClick={()=>incre()}>Increment button
//       </button>
//       <div> you clicked {count} times</div>
//       <button onClick={()=>decre()}> Decrement button</button>
//     </div>
//     </>
//   )
// }

// export default App