import React from 'react'
import { StyledBackBtn } from './styles/BackBtn.styled'
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function BackBtn() {
    return (
        <Link to='/events' >
            <StyledBackBtn>
                <RiArrowGoBackLine
                    size={'32px'}
                    color={'white'}
                />
            </StyledBackBtn>
        </Link>
    )
}
