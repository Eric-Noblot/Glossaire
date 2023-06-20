import "../../style/mainComponent.scss"
import ComponentChild from "./ComponentChild/ComponentChild"

const ComponentParent = ({datas, nameComponent}) => {

    const components = datas.components
    return (
        <div className = "componentList">
            {components.map((component) => 
            <ComponentChild id ={component.id} title={component.title} picture={component.picture} name={nameComponent}/>)}
        </div>
    );
};

export default ComponentParent;