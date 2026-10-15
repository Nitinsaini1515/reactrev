import { useEffect, useState } from "react";


function UseCurrency (currency){
  const [ data,setData] = useState("usd");
  useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
.then((res)=> {res.json(),
  console.log(res)
})
.then((res) => setData(res))
.catch(()=>{
  console.error();

})
  },[currency])
  return data;
}

export default UseCurrency