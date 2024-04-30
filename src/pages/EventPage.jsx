import React from 'react'
import { Container } from '../components/styles/Container.styled'
import SearchField from '../components/SearchField'
import EventItem from '../components/EventItem'
import PageIndicator from '../components/PageIndicator'

export default function EventPage() {
    return (
        <Container>
            <h1>Events</h1>

            <SearchField />

            <section>
                <EventItem />
                <EventItem />
                <EventItem />
                <EventItem />
            </section>
            <PageIndicator />
        </Container>
    )
}
