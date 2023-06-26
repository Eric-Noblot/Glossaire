import { useState } from "react"
import "./jeux1.scss"


const Jeux1 = () => {
    const [number, setNumber] = useState("")
    const [result, setResult] = useState(0)

    const handleClickNumber = (currentNumber) => {
        setNumber(currentNumber)
        console.log("number", number)
        console.log("currentNumber", currentNumber)
        const calculInput = typeof(currentNumber) === "number" ? `${number}${currentNumber}` : `${number} ${currentNumber} `
        setNumber(calculInput)

    }

    const handleChange = (e) => {
        console.log("e", e.target.value)
    }

    const getResult = () => {
        const operators = number.split(/[^-|+|\/|\*]/).filter(e => e);
        let index = number.indexOf(operators)
        let firstPart = parseInt(number.slice(0, index)) 
        let secondPart = parseInt(number.slice(index +1))
        let totalResult = 0

        switch(operators[0]) {
            case "+": totalResult =  firstPart + secondPart
            break
            case "-": totalResult = firstPart - secondPart
            break
            case "*": totalResult = firstPart * secondPart
            break
            case "/": totalResult = firstPart / secondPart
            break
        }   

        setResult(totalResult)  

        // if(number.includes("-")) {
        //     let index = number.indexOf("-")
        //     let firstPart = parseInt(number.slice(0, index)) 
        //     let secondPart = parseInt(number.slice(index +1))
        //     let totalResult =  firstPart - secondPart 
        //     setResult(totalResult)  
    }
 
    return (
        <div className = "body-calculatrice">
            <div className="calculator-grid">
                <div className ="output" >
                    <div onChange ={handleChange} className = "previous-operand">{number}</div>
                    <div className = "current-operand">{result}</div>
                </div>
                <button onClick={() => setNumber("")} className="span-two">AC</button>
                <button onClick= {() => {
                    setResult(0)
                    setNumber("")}}>DEL</button>
                <button onClick={() => handleClickNumber("/")}>/</button>
                <button onClick={() => handleClickNumber(1)}>1</button>
                <button onClick={() => handleClickNumber(2)}>2</button>
                <button onClick={() => handleClickNumber(3)}>3</button>
                <button onClick={() => handleClickNumber("*")}>*</button>
                <button onClick={() => handleClickNumber(4)}>4</button>
                <button onClick={() => handleClickNumber(5)}>5</button>
                <button onClick={() => handleClickNumber(6)}>6</button>
                <button onClick={() => handleClickNumber("+")}>+</button>
                <button onClick={() => handleClickNumber(8)}>8</button>
                <button onClick={() => handleClickNumber(9)}>9</button>
                <button onClick={() => handleClickNumber(10)}>10</button>
                <button onClick={() => handleClickNumber("-")}>-</button>
                <button>.</button>
                <button onClick={() => handleClickNumber(0)}>0</button>
                <button onClick={getResult} className="span-two">=</button>
            </div>
        </div>  
    );
};

export default Jeux1;



{/* <div className = "body-calculatrice">
<div className="calculator-grid">
    <div className ="output" >
        <div className = "previous-operand">165156151</div>
        <div className = "current-operand">15616151135  1</div>
    </div>
    <button className="span-two">AC</button>
    <button>DEL</button>
    <button>/</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>*</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>-</button>
    <button>.</button>
    <button>0</button>
    <button className="span-two">=</button>
</div>
</div> */}