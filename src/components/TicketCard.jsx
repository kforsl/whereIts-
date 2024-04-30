import React from 'react'
import { StyledTicketCard } from './styles/TicketCard.styled'

export default function TicketCard() {
    return (
        <StyledTicketCard>
            <section>
                <p>WHAT</p>
                <h1> Lasse-Stefanz</h1>
            </section>

            <section>
                <p>WHERE</p>
                <h2>Kjell Härnqvistsalen</h2>
                <h3>Göteborgs univeristet, Pedagogen, hus A</h3>
            </section>

            <section>
                <div>
                    <p>WHEN</p>
                    <h4>21 Mar</h4>
                </div>

                <div>
                    <p>FROM</p>
                    <h4>19.00</h4>
                </div>
                <div>
                    <p>To</p>
                    <h4>21.00</h4>
                </div>
            </section>

            <section>
                <p>INFO</p>
                <h5> Section C - Seat 233, bring umbrella </h5>
            </section>

            <section>
                <h6>
                    #A2ED7
                    <span>#A2ED7</span>
                </h6>

            </section>
        </StyledTicketCard >
    )
}
