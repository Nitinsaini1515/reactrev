import { use, useState } from "react"
import InputBox from "./components/InputBox"
import { UseCurrency } from "./hooks"
function App(){
const [amount,setAmount]  = useState("1");
const [from,setFrom] = useState("usd");
const [to,setTo] = useState("inr")
const [convertedAmount,setConvertedAmount] = useState("0");
const currencyInfo = UseCurrency(from);
const options = Object.keys(currencyInfo[from]||{});

const swap = ()=>{
setFrom(to)
setTo(from)
setConvertedAmount(amount)
setAmount(convertedAmount)
}
const convert = ()=>{
  setConvertedAmount (amount*currencyInfo[from][to]);
}
return(
    <>
   <div>
    <div style={{backgroundImage: new URL(`https://images.pexels.com/photos/29421580/pexels-photo-29421580.jpeg`)}}></div>
    <div>
<form action="" onSubmit={(e)=>{e.preventDefault();
   convert()}}>

<div>
  <InputBox label={from} amount={amount} curencyOptions ={options}  onCurrencyChange={(Currency)=> setAmount(amount)} selectCurrency={from}  onAmountChange={(amount) =>setAmount(amount)}/>
</div>
<button onClick={()=>swap()}>Swap</button>
 
<div>
  <InputBox label={to} amount={convertedAmount} curencyOptions ={options}  onCurrencyChange={(Currency)=>setTo(Currency)} selectCurrency={to} />
</div>
<button>{from.toUpperCase()} to {to.toUpperCase()}  </button>

</form>

    </div>

   </div>
    </>
  )
}
export default App