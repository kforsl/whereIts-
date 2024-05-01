import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/styles/Global";

// Pages
import HomePage from "./pages/HomePage";
import EventPage from './pages/EventPage';
import OrderPage from './pages/OrderPage';
import SingleEventPage from './pages/SingleEventPage';
import TicketPage from './pages/TicketPage';
import { useEffect } from "react";
import { useEventStore } from "./store";


function App() {

    const { addEventItem, getEvents } = useEventStore((state) => (({
        addEventItem: state.addEventItem,
        getEvents: state.getEvents,
    })))

    useEffect(() => {
        getEvents(addEventItem)
    }, [])

    const theme = {
        colors: {
            bg: 'rgb(35, 31, 66)',
            white: 'rgb(255, 255, 255)',
            accentBlue: 'rgb(55, 164, 171)',
            accentPink: 'rgb(245, 107, 154)',
            black: 'rgb(0,0,0)'
        },
        fonts: {
            sansita: 'Sansita One',
            fira: '"Fira Sans", sans-serif',
            barCode: '"Libre Barcode 128", system-ui',
        },
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventPage />} />
                <Route path="/events/:id" element={<SingleEventPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/tickets" element={<TicketPage />} />

            </Routes>
        </ThemeProvider>
    )
}

export default App
