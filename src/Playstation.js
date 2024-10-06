import React, { useState } from "react";
import { useCounter } from "./hooks/useCounter";

//RERENDER 
// 1.state change
// 2.parent rerender
// 3.context change
// 4.props change 
// 5.force rerender

// TODO hook use rules

// const someHeavyFunc=()=>{
// console.log('HEAVY!')
// return new Array(9999).fill(2).map((val)=>val**Math.round(Math.random()*1000))
// };

export const Playstation=()=>{
// const [counter,setCounter]=useState(0);
const {inc,dec,counter}=useCounter(1);
// const[arr,setArr]=useState(()=>someHeavyFunc());

// console.log(someHeavyFunc());
    
//  const inc=()=>{
//         setCounter(ctr=>ctr+1);
//         };
//  const dec=()=>{
//         setCounter(ctr=>ctr-1);
//         };
// console.log("RENDER")
    return(
        <>
        <h1>Sony Playstations:</h1>
        <p>{counter}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        </>
    )
};