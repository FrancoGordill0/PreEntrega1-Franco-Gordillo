import "./NavBar.css";
import Logo from "../../assets/logo.jpg";
import {CartWidget} from "../CartWidget/CartWidget"

export const NavBar = ()=>{
    return(
        <nav className="nav">
            <img src={Logo} alt="Logo" className="logo"/>
            <ul className="lista">
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Bases/Volantes</a></li>
                <li><a href="/">Cockpits</a></li>
                <li><a href="/">Nosotros</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}