import "./navBar.scss"
import { NavLink } from "react-router-dom"
import logo from "../../datas/img/logo_react.jpg"

function NavBar()  {
return (
    <div className = "navBar">
        <div className = "navBar__logo"></div>
        <ul className = "navBar__links">
            <NavLink to= "/" className= {(nav) => nav.isActive ? "navBar__link active": "navBar__link non_active"}><li >Home</li></NavLink>
            <NavLink to="/about" className = {(nav) => nav.isActive? "navBar__link active": "navBar__link non_active"}><li>About</li></NavLink>
        </ul>
    </div>
)

}

export default NavBar

