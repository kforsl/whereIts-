import React from 'react'
import { Container } from '../components/styles/Container.styled'
import Button from '../components/Button'
import Cart from '../components/Cart'

export default function OrderPage() {
    return (
        <Container>
            <h1>Order</h1>

            <Cart />

            <Button value='Skicka order' path='/tickets' />
        </Container>
    )
}
