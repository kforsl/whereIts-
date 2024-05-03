import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledPageIndicator } from './styles/PageIndicator.styled'

// Component 
import IndicatorDot from './IndicatorDot'

export default function PageIndicator() {
    const [pages, setPages] = useState([])

    useEffect(() => {
        checkActivePage()
    }, [])

    const checkActivePage = () => {
        const currentPath = location.pathname
        const newPages = [
            { path: '/', isActive: false },
            { path: '/events', isActive: false },
            { path: '/tickets', isActive: false }
        ]
        for (let i = 0; i < newPages.length; i++) {
            if (newPages[i].path === currentPath) {
                setPages(newPages[i].isActive = true)
            }
        }
        setPages(newPages)
    }

    return (
        <StyledPageIndicator>
            {
                pages.map((item) => {
                    return (
                        <Link to={item.path} key={item.path}>
                            <IndicatorDot isActive={item.isActive} />
                        </Link>
                    )
                })
            }
        </StyledPageIndicator >
    )
}
