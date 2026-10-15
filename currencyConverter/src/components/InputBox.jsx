
import React from 'react'

const InputBox = ({
label,
amount ,
onAmountChange ,
onCurrencyChange,
curencyOptions = [],
selectCurrency = "usd",
amountDisable = false,
currencyDisable = false,

}) => {
  return (
    <div className="w-full rounded-xl bg-white p-4 shadow-md border border-gray-200">
      <label htmlFor="" className="block mb-3 text-sm font-medium text-gray-500">{label}</label>

      <input 
      type='number'
      disabled={amountDisable}
      // onChange={}
      // value={amount}
      value={amount}
      onChange={(e) => onAmountChange&&onAmountChange(Number(e.target.value))}
      className="w-full mb-4 rounded-lg border border-gray-200 px-3 py-3 text-xl font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mb-2 text-sm text-gray-500">Currency Type</div>

      <select name="" id="" value={selectCurrency} onChange={(e) => onCurrencyChange&&onCurrencyChange(e.target.value)} disabled={currencyDisable}
      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium uppercase text-gray-700 outline-none focus:ring-2 focus:ring-blue-500">

{curencyOptions.map((Currency)=>(
<option key={Currency} value={Currency}>{Currency}</option>

)
)}
      </select>

    </div>
  )
}

export default InputBox
