import React from 'react'
import { StyledBackBtn } from './styles/BackBtn.styled'
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function BackBtn() {
    return (
        <Link to='/whereItsAt/events' aria-label='link to events'>
            <StyledBackBtn aria-label='button to go back'>
                <RiArrowGoBackLine
                    size={'32px'}
                    color={'white'}
                />
            </StyledBackBtn>
        </Link>
    )
}
