import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const CartWidget = ()=>{
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} className="fa-2x"/>
            <span>3</span>
        </div>
    )
}