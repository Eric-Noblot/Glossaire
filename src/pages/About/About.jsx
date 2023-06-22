import "./about.scss"
import NavBar from "../../Components/NavBar/NavBar"
import ListComponents from "../../Components/ListComponents/ListComponents"
import Filter from "../../Components/Filter/Filter"
import datas from "../../datas/components.json"
import { useState } from "react"

const About = () => {

    const [currentValue, setCurrentValue] = useState(datas)


    return (
        <div className ="about">
            <NavBar />
            <Filter />
            <ListComponents datas={currentValue}/>
        </div>
    );
};

export default About;