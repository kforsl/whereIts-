import React from 'react'
import { Container } from '../components/styles/Container.styled'
import SingleEventItem from '../components/SingleEventItem'
import Button from '../components/Button'


export default function SingleEventPage() {
    return (
        <Container>
            <div>
                <h1>Event</h1>
                <h2 style={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,.8)',
                    fontSize: '19px',
                    margin: '0 auto',
                    padding: '0 4rem'
                }}>
                    You are about to score some tickets to </h2>
            </div>
            <SingleEventItem />
            <Button value='Lägg i Varukorgen' path='/order' />

        </Container>
    )
}
