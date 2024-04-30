import React from 'react'
import { StyledButton } from './styles/Button.styled'
import { Link } from 'react-router-dom'

export default function Button({ value, path }) {
    return (
        <Link to={path} style={{ width: '100%', marginTop: 'auto', marginBottom: '0' }}>
            <StyledButton>
                {value}
            </StyledButton>
        </Link>
    )
}
