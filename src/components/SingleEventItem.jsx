import React from 'react'
import { StyledSingleEventItem } from './styles/SingleEventItem.styled'
import CartItem from '../components/CartItem'

export default function SingleEventItem({ thisEvent }) {

    return (
        <StyledSingleEventItem>
            {
                thisEvent && thisEvent.when && <>
                    <h2> {thisEvent.name}</h2>
                    <h3>{`
                        ${thisEvent.when.date}
                        kl
                        ${thisEvent.when.from}
                        -
                        ${thisEvent.when.to}`}
                    </h3>
                    <h4> {thisEvent.where} </h4>

                    <CartItem thisEvent={thisEvent} price={thisEvent.price} inCart={thisEvent.inCart} />
                </>
            }


        </StyledSingleEventItem>
    )
}
