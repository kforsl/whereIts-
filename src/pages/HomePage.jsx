import React from 'react'
import { Container } from '../components/styles/Container.styled'
import { Link } from 'react-router-dom'
import PageIndicator from '../components/PageIndicator'

export default function HomePage() {
    return (
        <Container style={{ textShadow: '1px 1px black', justifyContent: 'center', paddingTop: '50%' }}>
            <Link to="/events">
                <img src="../src/assets/logo.svg" alt="logo for Where it's @" />
            </Link>
            <h1 > Where It's @ </h1>
            <h2> Ticketsing made easy </h2>
            <PageIndicator />
        </Container>
    )
}
