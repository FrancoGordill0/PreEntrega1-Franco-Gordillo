import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {Link} from "react-router-dom";
import "./Cart.css"


export const Cart = () => {

  const value = useContext(CartContext);

  const { ProductosCarrito, getPrecioTotal, getTotalProds, removeItem, vaciarCarrito } = value;

  const [compraId, setCompraId] = useState("")

  const enviarOrden = (evt)=> {
    evt.preventDefault();
    
    const compra = {buyer: {
        name: evt.target[0].value,
        phone: evt.target[1].value,
        email: evt.target[2].value
      }, 
      
      items: ProductosCarrito,

      date: new Date().toDateString(),
      
      total: getPrecioTotal()
    }
    
    const querydb = getFirestore();
    const queryRef = collection(querydb, 'orders');
    addDoc(queryRef,compra).then((resultado)=>{ 
      setCompraId(resultado.id)
    });
  }

  if (ProductosCarrito.length === 0) {
    return (
      <div className="CartCont container-xxl">
          <p className="tituloCart">No hay productos en el carrito</p>
          <Link to="/">Clic aquí para ir Productos</Link>
      </div>
    );
  }
  

  return (

    <div className="CartCont container-xxl">
      <h3 className="tituloCart">Estás comprando:</h3>

      <div style={{width:"600px"}}>
        {
          ProductosCarrito.map((producto)=>(
            <div className="ItemCont"  key={producto.id}>
                <h3>{producto.title}</h3>
                <p>Precio por unidad {producto.precio}</p>
                <p>Cantidad {producto.quantity}</p>
                <p>Precio por cantidad: {producto.quantityPrice}U$D</p>
                <button className="btn btn-dark btn-sm" onClick={()=> removeItem(producto.id)}>Eliminar del Carrito</button>                
            </div>
          ))
        }
          <p>Precio Total: {getPrecioTotal()}U$D</p>
          <p>Total de Productos: {getTotalProds()}</p>
          <button className="botones btn btn-dark btn-sm" onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
          
        <div>  
          <form onSubmit={enviarOrden} className='formulario'>
              
              <input type="text" placeholder="Nombre"/>
              <input type="tel" placeholder="Telefono"/>
              <input type="email" placeholder="Ingrese su correo"/>

              <button type="submit" className="botones btn btn-dark btn-sm">Enviar Orden</button>
          </form>
        </div>
      </div>
      {compraId && <p>Tu compra fue registrada bajo el id: {compraId}</p>}
    </div>
  );
};