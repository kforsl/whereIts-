import React from 'react'
import { StyledIndicatorDot } from './styles/IndicatorDot.styled'

export default function IndicatorDot({ isActive }) {
    return (
        <>
            {
                isActive ?
                    <StyledIndicatorDot
                        style={{ backgroundColor: 'rgba(255,255,255,1)' }}
                    ></StyledIndicatorDot >
                    :
                    <StyledIndicatorDot></StyledIndicatorDot >
            }
        </>
    )
}
