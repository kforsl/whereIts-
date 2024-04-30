import { StyledCartItem } from './styles/CartItem.styled'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function CartItem({ event, details, price }) {
    return (
        <StyledCartItem>
            {event && <h4> {event} </h4>}
            {details && <h5> {details} </h5>}
            {price && <h6> {price * 3} </h6>}

            <div>
                <button> <FaMinus color='white' size='20px' /> </button>
                <p> 3 </p>
                <button> <FaPlus color='white' size='20px' /> </button>
            </div>
        </StyledCartItem >
    )
}
