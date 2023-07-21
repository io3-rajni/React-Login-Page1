import React, { useState } from "react";
const ChangeName = (props) => {
    console.log('setBgColor', props)
    const { colorProps, bgColor, setBgColor, setColor, parentFunction } = props
    const [name, setName] = useState("Rajni Maurya")
    const [childData, setChildData] = useState('Child Data')
    // const [nameReset, setNameReset] = useState("")
    const changeName = () => {
        setName("Ashu")
        setBgColor('black')
        setColor('white')
        parentFunction(childData)
    }
    const reChangeName = () => {
        setName("Maurya")
    }
    const reset = () => {
        // setNameReset("")
        setName("")
    }
    const preName = () => {
        setName("Rajni Maurya")
    }

    // console.log('color', colorProps)
    return <div>
        <h1>Enter Your Name</h1>
        <h2>{name}</h2>
        {/* <h2> {nameReset}</h2> */}
        <button onClick={changeName} style={{ color: colorProps, background: bgColor }}>Name</button>
        <button onClick={reChangeName}>Change Button</button>
        <button onClick={reset}>Reset</button>
        <button onClick={preName}>PreName


        </button>

    </div>

}
export default ChangeName