import React from "react";

const SearchName = ({handleSearchName, placeholder}) => {
    return (
        <div className = 'search'> 
            <input 
                onChange= {(event) => handleSearchName(event.target.value)}
                type= 'text'
                placeholder= {placeholder}
            />
        </div>
    )
}

export default SearchName;