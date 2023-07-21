import React, { useState } from "react";
const ChangeName = () => {
    const [name, setName] = useState("Rajni Maurya")
    const changeName = () => {
        setName("Ashu")
    }
    const reChangeName = () => {
        setName("Maurya")
    }
    const reset = () => {
        setName("")
    }
    const preName = () => {
        setName("Rajni Maurya")
    }
    return <>
        <diiv>
            <h1>Enter Your Name</h1>
            <h2>{name}</h2>
            {/* <h2> {nameReset}</h2> */}
            <button onClick={changeName}>Name</button>
            <button onClick={reChangeName}>Change Button</button>
            <button onClick={reset}>Reset</button>
            <button onClick={preName}>PreName             
            </button>

        </diiv>
    </>

}
export default ChangeName