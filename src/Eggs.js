import React, { useState } from "react";
import { useCounter } from "./hooks/useCounter";

export const Eggs=()=>{
// const [counter,setCounter]=useState(0);
const{inc,dec,counter}=useCounter(10);


// const inc=()=>{
//         setCounter(ctr=>ctr+10);
//         };
// const dec=()=>{
//         setCounter(ctr=>ctr-10);
//         };

    return(
        <>
        <h1>Eggs:</h1>
        <p>{counter}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        </>
    )
};