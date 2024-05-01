import React, { useEffect, useState } from 'react'
import { Container } from '../components/styles/Container.styled'
import SingleEventItem from '../components/SingleEventItem'
import Button from '../components/Button'
import { useParams } from 'react-router-dom'
import { useEventStore } from '../store'


export default function SingleEventPage() {

    const eventItems = useEventStore((state) => state.eventItems)

    const { id } = useParams();
    const [thisEvent, setThisEvent] = useState({})

    const handleThisEvent = () => {
        const filterdEvent = eventItems.filter((eventItem) => eventItem.name === id)
        setThisEvent(...filterdEvent)
    }

    useEffect(() => {
        handleThisEvent()
    }, [id, eventItems])

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
                    You are about to score some tickets to
                </h2>
            </div>
            <SingleEventItem thisEvent={thisEvent} />
            <Button value='Lägg i Varukorgen' path='/order' />

        </Container>
    )
}
