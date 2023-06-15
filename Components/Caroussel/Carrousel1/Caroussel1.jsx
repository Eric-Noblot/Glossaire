import "../../../style/mainComponent.scss"

const Caroussel1 = ({title, picture}) => {

    return (
        <div className ="component">
            <div className = "component__title">{title}</div>
            <img src = {picture} alt = "" className="component__img"></img>
        </div>
    );
};

export default Caroussel1;