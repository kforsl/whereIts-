import React from 'react'
import { useCartStore } from '../store'
import { Container } from '../components/styles/Container.styled'

// components 
import Button from '../components/Button'
import Cart from '../components/Cart'
import BackBtn from '../components/BackBtn'

export default function OrderPage() {

    const { cart, createOrder } = useCartStore((state) => ({
        cart: state.cart,
        createOrder: state.createOrder,
    }))

    return (
        <>
            <BackBtn />
            <Container>
                <h1>Order</h1>
                <Cart />
                <Button value='Skicka order' path='/whereItsAt/tickets' click={() => createOrder(cart)} />
            </Container>
        </>
    )
}
