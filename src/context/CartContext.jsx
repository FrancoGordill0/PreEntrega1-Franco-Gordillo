import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ProductosCarrito, setProdCarrito] = useState([])

    const isInCart = (id) => {
        const existeProducto = ProductosCarrito.some((elemento) => elemento.id === id);
        return existeProducto;
    }

    const addProd = (item, quantity) => {
        const ProductosCarritoCopia = [...ProductosCarrito];

        if (isInCart(item.id)) {
            const posicionProd = ProductosCarritoCopia.findIndex((elemento)=> elemento.id === item.id);
            ProductosCarritoCopia[posicionProd].quantity += quantity;
            ProductosCarritoCopia[posicionProd].quantityPrice = ProductosCarritoCopia[posicionProd].quantity*ProductosCarritoCopia[posicionProd].precio
            setProdCarrito(ProductosCarritoCopia);
        } else {
            const nuevoProd = {
                ...item,
                quantity: quantity,
                quantityPrice:quantity*item.precio,
            };
            ProductosCarritoCopia.push(nuevoProd);
            setProdCarrito(ProductosCarritoCopia);
        }
        
    }

    const getPrecioTotal = ()=>{
        const precioTotal = ProductosCarrito.reduce((acc, curr)=> acc + curr.quantityPrice,0);
        return precioTotal;
    }

    const getTotalProds = ()=>{
        const totalProds = ProductosCarrito.reduce((acc,curr)=>acc + curr.quantity,0);
        return totalProds;
    }

    const removeItem = (id)=>{
        const nuevosProductos = ProductosCarrito.filter((elemento)=> elemento.id !== id);
        setProdCarrito(nuevosProductos)
    }

    const vaciarCarrito = ()=> setProdCarrito([]);
    
    

    return (
        <div>
            <CartContext.Provider value={{ ProductosCarrito, addProd, getPrecioTotal, getTotalProds, removeItem, vaciarCarrito }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}