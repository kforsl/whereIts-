import React, { useEffect, useState } from 'react'
import { StyledSingleEventItem } from './styles/SingleEventItem.styled'
import { useCartStore } from '../store'

// Components
import CartItem from '../components/CartItem'

export default function SingleEventItem({ thisEvent }) {

    const [currentEvent, setCurrentEvent] = useState({})
    const { cart } = useCartStore((state) => ({ cart: state.cart }))

    useEffect(() => {
        setCurrentEvent(thisEvent)
    }, [thisEvent])

    useEffect(() => {
        cart.map((item) => {
            if (item.id === thisEvent.id) {
                setCurrentEvent(item)
            }
        })
    }, [currentEvent])

    return (
        <StyledSingleEventItem>
            {
                currentEvent && currentEvent.when && <>
                    <h2> {currentEvent.name}</h2>
                    <h3>{`
                        ${currentEvent.when.date}
                        kl
                        ${currentEvent.when.from}
                        -
                        ${currentEvent.when.to}`}
                    </h3>
                    <h4> {currentEvent.where} </h4>
                    <CartItem thisEvent={currentEvent} />
                </>
            }
        </StyledSingleEventItem>
    )
}
