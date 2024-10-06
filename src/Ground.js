import React, {useState}from "react";
import { useCounter } from "./hooks/useCounter";

export const Ground=()=>{
    // const [counter,setCounter]=useState(0);
    const {inc,dec,counter}=useCounter(1000);
    
    
    // const inc=()=>{
    //         setCounter(ctr=>ctr+1000);
    //         };
    // const dec=()=>{
    //         setCounter(ctr=>ctr-1000);
    //         };
    
        return(
            <>
            <h1>Ground:</h1>
            <p>{counter}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            </>
        )
    };
