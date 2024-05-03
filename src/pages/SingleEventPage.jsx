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

    useEffect(() => {
        handleThisEvent()
    }, [id, eventItems])

    const handleThisEvent = () => {
        const filterdEvent = eventItems.find((eventItem) => eventItem.id === id)
        console.log(filterdEvent);
        setThisEvent(structuredClone(filterdEvent))
    }

    return (
        <Container>
            <div>
                <h1>Event</h1>
                <h2 style={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,.8)',
                    fontSize: '19px',
                    margin: '0 auto',
                    padding: '0 3.5rem'
                }}>
                    You are about to score some tickets to
                </h2>
            </div>
            <SingleEventItem thisEvent={thisEvent} />

            <Button value='Till varukorgen' path='/order' />

        </Container>
    )
}
