import React from "react";

const Search = ({handleSearchName}) => {
    return (
        <div className = 'search'> 
            <input 
                onChange= {(event) => handleSearchName(event.target.value)}
                type= 'text'
                placeholder= 'Search by name'
            />
        </div>
    )
}

export default Search;