import "./componentPage.scss"
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom"
import Filter from "../Filter/Filter"

import ComponentParent from "../ComponentParent/ComponentParent"
import Loader from "../Loader/Loader"
import Slider from "../Slider/Slider"
import Inscription from "../Inscription/Inscription"
import Formulaire from "../Formulaire/Formulaire"
import Jeux from "../Jeux/Jeux"

const ComponentPage = ({datas}) => {
    const component = useParams().title 

    const currentComponent = datas.find((data) => data.title === component)

    //je voulais recuper la variable en capitale pour l'uliser directement en props
    const CurrentComponentTitle = currentComponent.title.charAt(0).toUpperCase()
    + currentComponent.title.slice(1)
    return (
         <div className = "componentPage">
            <NavBar />
            <Filter />

            <div className ="componentPage__container">
                <img src={currentComponent.picture} alt ={currentComponent.title} className="componentPage__img"/>
                <div className = "componentPage__title">{currentComponent.title}</div>
            </div>

            <ComponentParent datas={currentComponent} nameComponent={CurrentComponentTitle}/>
            {/* { CurrentComponentTitle ==="Loader" ? <ComponentParent datas={currentComponent} nameComponent={CurrentComponentTitle}/> : null} */}
            {/* { CurrentComponentTitle ==="Caroussel" ? <ComponentParent datas={currentComponent} nameComponent={CurrentComponentTitle}/> : null}
            { CurrentComponentTitle ==="Slider" ? <ComponentParent datas={currentComponent} nameComponent={CurrentComponentTitle}/> : null}
            { CurrentComponentTitle ==="Inscription" ? <ComponentParent datas={currentComponent} nameComponent={CurrentComponentTitle}/> : null}
            { CurrentComponentTitle ==="Formulaire" ? <ComponentParent datas={currentComponent} nameComponent={CurrentComponentTitle}/> : null}
            { CurrentComponentTitle ==="Jeux" ? <ComponentParent datas={currentComponent} nameComponent={CurrentComponentTitle}/> : null} */}

        </div>
    );
};

export default ComponentPage