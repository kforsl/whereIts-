import React from 'react'
import { Container } from '../components/styles/Container.styled'
import { useEventStore } from '../store'

// Components 
import SearchField from '../components/SearchField'
import EventItem from '../components/EventItem'
import PageIndicator from '../components/PageIndicator'
import Button from './../components/Button';

export default function EventPage() {

    const eventItems = useEventStore((state) => state.eventItems)

    return (
        <>
            <Container>
                <h1>Events</h1>
                <SearchField />
                <section>
                    {
                        eventItems.map((eventItem) => {
                            return <EventItem event={eventItem} key={eventItem.id} />
                        })
                    }
                </section>
                <Button value='Till varukorg' path='/order' />
            </Container>
            <PageIndicator />
        </>
    )
}
