import React from "react";
import { useState } from "react";

let UpdateComponent=(OriginalComponent)=>{
    function NewComponent(){
        let [money,setMoney]=useState(1)
        let Higher=()=>{
            setMoney(money+1)
        }
        return<OriginalComponent Higher={Higher} money={money}/>
    }
    return NewComponent;
}
export default UpdateComponent;

// let Update=(Original)=>{
//     function New(){
//         let [money,setMoney]=useState(10)
//         let Higher=()=>{
//             setMoney(money+10)
//         }
//         return <Original Higher={Higher} money={money} />
//     }
//       return New
// }
// export default Update