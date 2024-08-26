import React from 'react'
import { StyledSearchField } from './styles/SearchField.styled'

// Icons 
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchField() {

    return (
        <StyledSearchField>
            <button type="button" onClick={(e)=> {e.preventDefault()}} aria-label='search button for event search'>
                <FaMagnifyingGlass
                    size={'20px'}
                />
            </button>
            <input type="text" aria-label='search bar for event search' />
        </StyledSearchField>
    )
}
