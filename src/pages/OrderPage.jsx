import React from 'react'
import { Container } from '../components/styles/Container.styled'
import Button from '../components/Button'
import Cart from '../components/Cart'
import { useCartStore } from '../store'

export default function OrderPage() {

    const { cart, createOrder } = useCartStore((state) => ({
        cart: state.cart,
        createOrder: state.createOrder,
    }))

    return (
        <Container>
            <h1>Order</h1>
            <Cart />
            <Button value='Skicka order' path='/tickets' click={() => createOrder(cart)} />
        </Container>
    )
}
