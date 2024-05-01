import React, { useEffect, useState } from 'react';
import { StyledCartItem } from './styles/CartItem.styled'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useCartStore } from '../store';

export default function CartItem({ thisEvent = null, price = 0, inCart = 0 }) {

    const [isOrderPage, setIsOrderPage] = useState(false)
    const [currentEvent, setCurrentEvent] = useState({})

    const { cart, removeFromCart, addToCart } = useCartStore((state) => ({
        cart: state.cart,
        removeFromCart: state.removeFromCart,
        addToCart: state.addToCart,
    }))

    useEffect(() => {
        checkCurrentPage()
        handleCurrentEvent()
    }, [])

    useEffect(() => {
        handleCurrentEvent()
    }, [cart])

    const checkCurrentPage = () => {
        setIsOrderPage(location.pathname === '/order');
    }

    const handleCurrentEvent = () => {
        if (!thisEvent.inCart) { thisEvent.inCart = 0 }
        setCurrentEvent(thisEvent)
    }

    return (
        <StyledCartItem>
            {
                !isOrderPage ?
                    <h6> {currentEvent.price * currentEvent.inCart} </h6>
                    : <>
                        <h4> {currentEvent.name} </h4>
                        <h5> {`
                                ${currentEvent.when.date}
                                kl
                                ${currentEvent.when.from}
                                -
                                ${currentEvent.when.to}
                            `}
                        </h5>
                    </>
            }

            <div>
                <button
                    onClick={() =>
                        removeFromCart(currentEvent, cart)
                    }>
                    <FaMinus
                        color='white'
                        size='20px'
                    />
                </button>
                <p> {currentEvent.inCart} </p>
                <button
                    onClick={() =>
                        addToCart(currentEvent, cart)
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
