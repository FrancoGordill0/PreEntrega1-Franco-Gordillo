import "./NavBar.css";

import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {
    return (
        <nav className="nav">
            <div>
                <Link to="/"> <img src={Logo} alt="Logo" className="logo" /></Link>
            </div>

            <ul className="lista">
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/categoria/volantes'>Volantes</NavLink></li>
                <li><NavLink to='/categoria/pedales'>Pedales</NavLink></li>
            </ul>
            <div className="carrito">
                <Link to='/Cart'>
                    <CartWidget />
                </Link>
            </div>
        </nav>
    )
}