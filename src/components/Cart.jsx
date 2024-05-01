import React, { useEffect, useState } from 'react'
import { StyledCart } from './styles/Cart.styled'
import CartItem from './CartItem';
import { useCartStore } from '../store';

export default function Cart() {

    const cart = useCartStore((state) => state.cart)
    const [totalPrice, setTotalPrice] = useState(0)

    const handleTotalPrice = () => {
        let price = 0
        cart.map((item) => {
            price += item.price * item.inCart
        })

        setTotalPrice(price)
    }

    useEffect(() => {
        handleTotalPrice()
    }, [cart])

    return (
        <StyledCart>
            {
                cart.map((item) => {
                    return <CartItem thisEvent={item} key={item.name} />
                })
            }
            <div>
                <h2 style={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,.8)',
                    fontSize: '19px',
                    marginBottom: '1rem'
                }}>
                    Totalt värde på order
                </h2>
                <h2
                    style={{
                        textShadow: `1px 1px rgb(245,107,154)`,
                        textAlign: 'center',
                        fontSize: '32px',
                        fontWeight: '700'
                    }}
                >
                    {totalPrice} sek
                </h2>
            </div>
        </StyledCart>
    )
}
