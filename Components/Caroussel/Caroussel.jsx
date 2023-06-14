import "./caroussel.scss"
import NavBar from "../NavBar/NavBar";
import Filter from "../Filter/Filter"
import { useParams } from "react-router-dom"

const Caroussel = ({datas}) => {
    const component = useParams().title 

    const currentComponent = datas.find((data) => data.title === component)

    return (
         <div className = "caroussel">
            <NavBar />
            <Filter />
            <div className ="caroussel__container">
                <img src={currentComponent.picture} alt ="te" className="caroussel__img"/>
                <div className = "caroussel__title">{currentComponent.title}</div>
            </div>
        </div>
    );
};

export default Caroussel;