import React, { useEffect, useState } from 'react';
import { StyledCartItem } from './styles/CartItem.styled'
import { useCartStore } from '../store';

// Icons 
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function CartItem({ thisEvent }) {
    const { cart, removeFromCart, addToCart } = useCartStore((state) => ({
        cart: state.cart,
        removeFromCart: state.removeFromCart,
        addToCart: state.addToCart,
    }))

    const [isOrderPage, setIsOrderPage] = useState(false)

    useEffect(() => {
        setIsOrderPage(location.pathname === '/order')
    }, [])

    return (
        <StyledCartItem>
            {
                !isOrderPage ?
                    thisEvent.inCart ? <h6> {thisEvent.price * thisEvent.inCart} </h6> : <h6> 0 </h6>
                    : <>
                        <h4> {thisEvent.name} </h4>
                        <h5> {`
                            ${thisEvent.when.date}
                            kl
                            ${thisEvent.when.from}
                            -
                            ${thisEvent.when.to}
                            `}
                        </h5>
                    </>
            }

            <div>
                <button
                    aria-label={`Remove from cart button`}
                    onClick={() => removeFromCart(thisEvent, cart)
                    }>
                    <FaMinus
                        color='white'
                        size='20px'
                    />
                </button>
                {thisEvent.inCart ? <p> {thisEvent.inCart} </p> : <p> 0 </p>}
                <button
                    aria-label={`Add to cart button`}
                    onClick={() => addToCart(thisEvent, cart)
                    }>
                    <FaPlus
                        color='white'
                        size='20px'
                    />
                </button>
            </div>
        </StyledCartItem >
    )
}
