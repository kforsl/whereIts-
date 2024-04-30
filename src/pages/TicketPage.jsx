import React from 'react'
import { Container } from '../components/styles/Container.styled'
import TicketCard from '../components/TicketCard'

export default function TicketPage() {
    return (
        <Container style={{ background: 'linear-gradient(180deg, #F56B9A 0%, rgba(177, 52, 254, 0) 30%)', justifyContent: 'center' }}>
            <TicketCard />
        </Container>
    )
}
