import React from 'react'
import { StyledCart } from './styles/Cart.styled'
import CartItem from './CartItem';

export default function Cart() {
    return (
        <StyledCart>
            <CartItem event={'Lasse-Stefanz'} details={'21 mars kl 19.00 - 21.00'} />
            <CartItem event={'Lasse-Stefanz'} details={'21 mars kl 19.00 - 21.00'} />
            <CartItem event={'Lasse-Stefanz'} details={'21 mars kl 19.00 - 21.00'} />
            <CartItem event={'Lasse-Stefanz'} details={'21 mars kl 19.00 - 21.00'} />
            <CartItem event={'Lasse-Stefanz'} details={'21 mars kl 19.00 - 21.00'} />
            <CartItem event={'Lasse-Stefanz'} details={'21 mars kl 19.00 - 21.00'} />
            <CartItem event={'Lasse-Stefanz'} details={'21 mars kl 19.00 - 21.00'} />

            <div>
                <h2 style={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,.8)',
                    fontSize: '19px',
                    marginBottom: '1rem'
                }}> Totalt värde på order </h2>
                <h2 style={{ textShadow: `1px 1px rgb(245,107,154)`, textAlign: 'center', fontSize: '32px', fontWeight: '700' }}> 1310 sek </h2>
            </div>
        </StyledCart>
    )
}
