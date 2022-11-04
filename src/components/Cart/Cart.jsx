import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {Link} from "react-router-dom";
import "./Cart.css"
import swal from 'sweetalert2';


export const Cart = () => {

  const value = useContext(CartContext);

  const { ProductosCarrito, getPrecioTotal, getTotalProds, removeItem, vaciarCarrito } = value;

  const [compraId, setCompraId] = useState('');

  const enviarOrden = (evt)=> {
    evt.preventDefault();
    
    const compra = {buyer: {
        name: evt.target[0].value,
        phone: evt.target[1].value,
        email: evt.target[2].value
      }, 
      
      items: ProductosCarrito,
      total: getPrecioTotal(),
      date: new Date().toDateString()
    }
    
    const querydb = getFirestore();
    const queryRef = collection(querydb, 'orders');
    addDoc(queryRef,compra).then((resultado)=>{
      setCompraId(resultado.id);
    })
    
  }
      

  const mostrarAlerta = () => {
    swal.fire({
      icon: 'success',
      title: 'Compra exitosa!',
      text: 'Estás siendo redirigido',
      html: `<p>Tu número de orden es: ${compraId}</p>`,
    }).then(function(){
        window.location = '/';
        vaciarCarrito()
    })
  }



  if (ProductosCarrito.length === 0) {
    return (
      <div className="CartCont">
          <img src="https://i.gifer.com/ITcG.gif" alt="" />
          <h3 className="tituloCart">No hay productos en el carrito </h3>
          <Link className="btn btn-dark btn-sm" to="/">Click aquí para ir a productos</Link>
      </div>
    );
  }
  

  return (

    <div className="CartCont">
      <h2 className="tituloCart">Estás comprando:</h2>

      <div style={{width:"600px"}}>
        {
          ProductosCarrito.map((producto)=>(
            <div className="ItemCont"  key={producto.id}>
                <h4>{producto.title}</h4>
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
              
              <input required type="text" placeholder="Nombre"/>
              <input required type="tel" placeholder="Telefono"/>
              <input required type="email" placeholder="Ingrese su correo"/>

              <button type="submit" className="botones btn btn-dark btn-sm">Enviar Orden</button>
          </form>
        </div>
      </div>
      {compraId && mostrarAlerta()}
    </div>
  );
};