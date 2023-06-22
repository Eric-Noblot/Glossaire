import "./listComponents.scss"
import { Link } from "react-router-dom"
import ComponentPage from "../ComponentPage/ComponentPage"
import { useState } from "react"

const ListComponents = ({datas}) => {
    const [currentData, setCurrentData] = useState(datas)
    const half = currentData.slice(2,4)
    // setCurrentData(half)

    return (
        <div className = "listComponents">
            {currentData.map((data, index)=> 
                <Link to={`/component/${data.title}`} ><div key = {index} className= "listComponents__card">
                    <img src= {data.picture} alt={data.title} className="listComponents__img"></img>
                    <div className = "listComponents__filter"></div>
                    <div className="listComponents__title">{data.title}</div>
                </div></Link>
            )}   
        </div>
    );
};

export default ListComponents;