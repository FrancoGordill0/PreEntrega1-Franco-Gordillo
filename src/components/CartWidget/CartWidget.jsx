import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = ()=>{
    return (
        <div>
            <FontAwesomeIcon icon={faCoffee}/>
            <span>3</span>
        </div>
    )
}