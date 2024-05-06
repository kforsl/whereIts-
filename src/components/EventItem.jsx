import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { StyledEventItem } from './styles/EventItem.styled'
import { splitDate } from '../store';

export default function EventItem({ event }) {

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')

    useEffect(() => {
        splitDate(setDay, setMonth, event)
    }, [event])

    return (
        <Link to={`/events/${event.id}`} style={{ width: '100%', textDecoration: 'none' }}>
            <StyledEventItem>
                <section>
                    <p>
                        {day}
                        <span>
                            {month}
                        </span>
                    </p>
                </section>

                <section>

                    <h2> {event.name} </h2>
                    <div>
                        <div>
                            <h4> {event.where} </h4>
                            <h5> {event.when.from} - {event.when.to} </h5>
                        </div>
                        <h3>{event.price} sek</h3>
                    </div>
                </section>
            </StyledEventItem>
        </Link>
    )
}
