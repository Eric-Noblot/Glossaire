import "./filter.scss"
import { useState } from "react"

const Filter = () => {

    const [inputValue, setInputValue] = useState("")

    const getValue = (event) => {
        setInputValue(event.target.value)
    }
    // console.log(inputValue)

    return (
        <div className = "filter">
            <input onChange={getValue} type = "text" placeholder ="Recherche ..." className = "filter__input"></input>
            {/* <button>GO !</button> */}
        </div>
    );
};

export default Filter;