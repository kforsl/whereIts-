import React from 'react'
import { StyledSearchField } from './styles/SearchField.styled'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchField() {

    return (
        <StyledSearchField>
            <button>
                <FaMagnifyingGlass
                    style={{
                        width: '20px',
                        height: '20px'
                    }} />
            </button>
            <input type="text" />
        </StyledSearchField>
    )
}
