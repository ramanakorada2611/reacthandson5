import React from 'react'
// import { useState } from 'react'
import UpdatedComponent from './Components/Hoc'

 function Extra({money,Higher}) {
    // let [money,setMoney]=useState(10)
    // let Function=()=>{
    //     setMoney(money+10)
    // }
  return (
    <>
    {/* <h1>ramana's earning salary{money}</h1> */}
    <button  className="button" onClick={Higher}>botton from component 1 clicked {money} times</button>
    </>
  )
}
export default UpdatedComponent(Extra)