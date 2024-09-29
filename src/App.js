import React from "react";



export const App=()=>{

    let counter=0;
    const inc=()=>{
        counter++;
        console.log(counter);
    };
console.log("RENDER")
    return(
        <>
        <h1>Hello world!</h1>
        <p>{counter}</p>
        <button onClick={inc}>+</button>
        </>
    )
};