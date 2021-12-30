import React from 'react'

const Search = ({search, onChange}) => {
    return (
        <div>
            <p>find countries <input value={search} onChange={onChange}/> </p>
        </div>
    )
}

export default Search
