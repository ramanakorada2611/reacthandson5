// import React, { useState } from 'react'
import UpdatedComponent from './Components/Hoc'

 function Sample({money,Higher}) {
    // let [money,setMoney]=useState(10)
    // let Function=()=>{
    //     setMoney(money+10)
    // }
 return (
   <>
   {/* <h1>Dolly's earning salary{money}</h1> */}
   <button className="button"onClick={Higher}>botton from component 2 clicked {money} times</button>
   </>
 )
}
export default UpdatedComponent(Sample)

