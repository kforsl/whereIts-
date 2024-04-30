import React from 'react'
import { StyledSingleEventItem } from './styles/SingleEventItem.styled'
import CartItem from '../components/CartItem'

export default function SingleEventItem() {
    return (
        <StyledSingleEventItem>
            <h2> Lasse-Stefanz </h2>
            <h3> 21 mars kl 19.00 - 21.00 </h3>
            <h4> @ Kjell Härnqvistsalen </h4>

            <CartItem price='350' />

        </StyledSingleEventItem>
    )
}
