import Item from "../Item/Item";
import React from "react";
import "./ItemList.css"

const ItemList = ({data = [] }) => {
    return (
        <div className="itemList">
            {
                data.map(volante => <Item key={volante.id} desc={volante} />)
            }
        </div>
    );
}


export default ItemList;