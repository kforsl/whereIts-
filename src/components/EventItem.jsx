import React from 'react'
import { StyledEventItem } from './styles/EventItem.styled'
import { Link } from 'react-router-dom';

export default function EventItem() {
    return (
        <Link to="/events/22" style={{ width: '100%', textDecoration: 'none' }}>
            <StyledEventItem>
                <section>
                    <p>
                        21
                        <span>
                            MAR
                        </span>
                    </p>
                </section>

                <section>
                    <div>
                        <h2> Lasse-Stefanz </h2>
                        <h4> Kjell Härnqvistsalen </h4>
                        <h5> 19.00 - 21.00 </h5>
                    </div>
                    <div>
                        <h3>350 sek</h3>
                    </div>
                </section>
            </StyledEventItem>
        </Link>
    )
}
