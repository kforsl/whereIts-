import React from 'react'
import { Container } from '../components/styles/Container.styled'
import SearchField from '../components/SearchField'
import EventItem from '../components/EventItem'
import PageIndicator from '../components/PageIndicator'
import { useEventStore } from '../store'

export default function EventPage() {

    const eventItems = useEventStore((state) => state.eventItems)

    return (
        <Container>
            <h1>Events</h1>
            <SearchField />
            <section>
                {
                    eventItems.map((eventItem) => {
                        return <EventItem event={eventItem} key={eventItem.name} />
                    })
                }
            </section>
            <PageIndicator />
        </Container>
    )
}
