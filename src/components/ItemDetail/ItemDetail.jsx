import "./ItemDetail.css"
import React from "react";
import ItemCount from "../ItemCount/ItemCount";


export const ItemDetail = ({data}) =>{

    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} unidades`);
    }

    return (
        <div className="detalle container-fluid container-xxl">
            <img src={data.image} alt="" />
            <div>
                <h1>{data.title}</h1>
                <h2>{data.precio}</h2>
                <p>{data.descripcion}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
        </div>
        
    );
}

export default ItemDetail;
