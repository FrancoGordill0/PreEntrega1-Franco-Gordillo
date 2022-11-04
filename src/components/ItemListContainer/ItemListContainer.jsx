import React, { useState, useEffect } from "react";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";



export const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        

        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res=> setData(res.docs.map(product => ({id: product.id, ...product.data()}) )))
        }else {
            getDocs(queryCollection)
                .then(res=> setData(res.docs.map(product => ({id: product.id, ...product.data()}), setLoading(false))))
        }
        

    }, [categoriaId])


    return (
        <div className="contenedorPadre">
                
                { 
                loading ? <Loader/> : 
                <ItemList data={data} />
                }
                
        </div>

    )
}

export default ItemListContainer;