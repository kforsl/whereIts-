import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledPageIndicator } from "./styles/PageIndicator.styled";

// Component
import IndicatorDot from "./IndicatorDot";
import { Container } from "./styles/Container.styled";

export default function PageIndicator() {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        checkActivePage();
    }, []);

    const checkActivePage = () => {
        const currentPath = location.pathname;
        const newPages = [
            { path: "/whereItsAt/", isActive: false, value: "Home" },
            { path: "/whereItsAt/events", isActive: false, value: "Events" },
            { path: "/whereItsAt/tickets", isActive: false, value: "Tickets" },
        ];
        for (let i = 0; i < newPages.length; i++) {
            if (newPages[i].path === currentPath) {
                setPages((newPages[i].isActive = true));
            }
        }
        setPages(newPages);
    };

    return (
        <StyledPageIndicator>
                {pages.map((item) => {
                    return (
                        <Link
                            to={item.path}
                            key={item.path}
                            style={{ textDecoration: "none" }}
                        >
                            <IndicatorDot
                                isActive={item.isActive}
                                value={item.value}
                            />
                        </Link>
                    );
                })}
        </StyledPageIndicator>
    );
}
