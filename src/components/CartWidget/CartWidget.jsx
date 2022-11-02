import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'


export const CartWidget = ()=>{

    const {getTotalProds} = useContext(CartContext);

    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} className="fa-2x"/>
            <span>{getTotalProds() || ""}</span>
        </div>
    )
}