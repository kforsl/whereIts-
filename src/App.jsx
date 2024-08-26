import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useEventStore } from "./store";

// Components
import GlobalStyles from "./components/styles/Global";

// Pages
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import OrderPage from "./pages/OrderPage";
import SingleEventPage from "./pages/SingleEventPage";
import TicketPage from "./pages/TicketPage";

function App() {
    const getEvents = useEventStore((state) => state.getEvents);

    useEffect(() => {
        getEvents();
    }, []);

    const theme = {
        colors: {
            bg: "rgb(35, 31, 66)",
            accentBlue: "rgb(55, 164, 171)",
            accentPink: "rgb(245, 107, 154)",
        },
        fonts: {
            sansita: "Sansita One",
            fira: '"Fira Sans", sans-serif',
            barCode: '"Libre Barcode 128", system-ui',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
                <Route path='/whereItsAt/' element={<HomePage />} />
                <Route path='/whereItsAt/events' element={<EventPage />} />
                <Route path='/whereItsAt/events/:id' element={<SingleEventPage />} />
                <Route path='/whereItsAt/order' element={<OrderPage />} />
                <Route path='/whereItsAt/tickets' element={<TicketPage />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
