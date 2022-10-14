import Item from "../Item/Item";
import React from "react";

const ItemList = ({data = [] }) => {
    return (
        data.map(volante => <Item key={volante.id} desc={volante} />)
    );
}


export default ItemList;