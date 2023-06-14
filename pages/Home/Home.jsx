import NavBar from "../../Components/NavBar/NavBar"
import Filter from "../../Components/Filter/Filter"
import ListComponents from "../../Components/ListComponents/ListComponents"
import datas from "../../datas/components.json"
import { useState } from "react"
import "./Home.scss"

const Home = () => {

    const [currentValue, setCurrentValue] = useState(datas)

    return (
        <div className= "home">
            <NavBar/>
            <Filter />
            <ListComponents datas={currentValue} />
        </div>
    );
};

export default Home;