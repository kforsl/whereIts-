import React from 'react'
import { StyledErrorMsg } from './styles/ErrorMsg.styled'

export default function ErrorMsg({ value }) {
    return (
        <StyledErrorMsg>
            {value}
        </StyledErrorMsg>
    )
}
