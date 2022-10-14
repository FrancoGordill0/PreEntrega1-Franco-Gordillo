import "./Item.css";
import {Link} from "react-router-dom";
import React from "react";


const Item = ({ desc }) => {


    return (
    <div className="bases">
            <img src={desc.image} alt=""/>
            <p>{desc.title}</p>

        <Link to={`/detalle/${desc.id}`}>
            <button className="btn btn-dark ">Detalle del Producto</button>
        </Link>
    </div>
    );
}


export default Item;

