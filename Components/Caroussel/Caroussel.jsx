import "../../style/mainComponent.scss"
import Caroussel1 from "./Carrousel1/Caroussel1"


const Caroussel = ({datas}) => {

    const components = datas.components
 
    return (
        <div className = "componentList">
            {components.map((component) => 
            <Caroussel1 title={component.titleCaroussel} picture={component.pictureCaroussel}/>)}
        </div>
    );
};

export default Caroussel;