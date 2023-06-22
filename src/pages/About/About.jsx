import "./about.scss"
import NavBar from "../../Components/NavBar/NavBar"
import ListComponents from "../../Components/ListComponents/ListComponents"
import Filter from "../../Components/Filter/Filter"

const About = () => {
    return (
        <div className ="about">
            <NavBar />
            <Filter />
            <ListComponents />
        </div>
    );
};

export default About;