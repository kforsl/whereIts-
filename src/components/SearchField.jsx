import React from 'react'
import { StyledSearchField } from './styles/SearchField.styled'

// Icons 
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchField() {

    return (
        <StyledSearchField>
            <button>
                <FaMagnifyingGlass
                    size={'20px'}
                />
            </button>
            <input type="text" />
        </StyledSearchField>
    )
}
