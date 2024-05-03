import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { StyledEventItem } from './styles/EventItem.styled'

export default function EventItem({ event }) {

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')

    useEffect(() => {
        splitDate()
    }, [event])

    const splitDate = () => {
        const splitSting = event.when.date.split(' ')
        setDay(splitSting[0])
        setMonth(splitSting[1].substring(0, 3).toUpperCase())
    }

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
                    <div>
                        <h2> {event.name} </h2>
                        <h4> {event.where} </h4>
                        <h5> {event.when.from} - {event.when.to} </h5>
                    </div>
                    <div>
                        <h3>{event.price} sek</h3>
                    </div>
                </section>
            </StyledEventItem>
        </Link>
    )
}
