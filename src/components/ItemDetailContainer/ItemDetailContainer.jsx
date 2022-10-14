import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


const products = [
    { id: 1, 
      image: "https://fanatec.com/media/image/6e/8c/24/Product_Page_top_banner_GT_DD_PRO_Boost_Kit_180.jpg", 
      title: "Base CSL DD Pro + fuente 8nm", 
      descripcion: "Base Direct Drive con fuente 8nm", 
      precio: 900,
      category: "volantes",
     },
    { id: 2, 
      image: "https://fanatec.com/media/image/1d/95/a1/Product_Page_top_banner_GT_DD_PRO_TC_Boost_Kit_Bundle.jpg",
      title: "Bundle Fanatec CSL DD Pro", 
      descripcion: "Base Direct Drive + Aro + Pedales CSL", 
      precio: 1000,
      category: "volantes",
     },
    { id: 3, 
      image: "https://fanatec.com/media/image/83/3f/cd/PRWF1_prime_2.jpg", 
      title: "Fanatec Podium Racing F1", 
      descripcion: "Base Direct Drive + Aro F1", 
      precio: 1800,
      category: "volantes",
     },
    { id: 4, 
      image: "https://heusinkveld.com/images/Sim-Pedals-Ultimate-Productfoto-c.jpg", 
      title: "Heusinkveld Ultimate+", 
      descripcion: "Pedales Heusinkveld Ultimate+", 
      precio: 1100,
      category: "pedales",
     }
];



export const ItemDetailContainer = () =>{
    

    const [data, setData] = useState({});


    const { detalleId } = useParams();


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        
        getData.then(res => setData (res.find(prod => prod.id === parseInt(detalleId))));

    }, [detalleId])
    
    return (
        <ItemDetail data={data}/>
    )
}


export default ItemDetailContainer;

