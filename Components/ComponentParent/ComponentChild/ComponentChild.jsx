import "../../../style/mainComponent.scss"
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import {GetComponent} from "../../../App"

const ComponentChild = ({title, picture, name, id}) => {
    // const valueContext = useContext(GetComponent)
    const [valueComponent, setValueComponent] = useContext(GetComponent)
    
    useEffect (() => {
        // alert("value COMP", valueComponent)

    })

    return (
       
        <Link to={`/component/${name}/${id}`} onClick={() => setValueComponent(name)}  >
            <div className ="component">
                <div className = "component__title">{title}</div>
                <img src = {picture} alt = "" className="component__img" ></img>
            </div>
        </Link>
    );
};

export default ComponentChild;