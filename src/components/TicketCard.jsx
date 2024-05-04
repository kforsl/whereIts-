import React, { useEffect, useState } from 'react'
import { StyledTicketCard } from './styles/TicketCard.styled'
import { splitDate } from '../store'

export default function TicketCard({ orderItem }) {

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')

    useEffect(() => {
        splitDate(setDay, setMonth, orderItem)
    }, [orderItem])

    return (
        <StyledTicketCard>
            <section>
                <p>WHAT</p>
                <h1> {orderItem.name}</h1>
            </section>
            <section>
                <p>WHERE</p>
                <h2>{orderItem.where}</h2>
            </section>
            <section>
                <div>
                    <p>WHEN</p>
                    <h4>{`${day} ${month}`}</h4>
                </div>
                <div>
                    <p>FROM</p>
                    <h4>{orderItem.when.from}</h4>
                </div>
                <div>
                    <p>To</p>
                    <h4>{orderItem.when.to}</h4>
                </div>
            </section>
            <section>
                <p>INFO</p>
                {orderItem.section && <h5>{`Section ${orderItem.section} - Seat ${orderItem.seat}`}</h5>}
            </section>
            <section>
                {orderItem.ticketNmbr && <h6>
                    {orderItem.ticketNmbr}
                    <span>#{orderItem.ticketNmbr}</span>
                </h6>}
            </section>
        </StyledTicketCard >
    )
}