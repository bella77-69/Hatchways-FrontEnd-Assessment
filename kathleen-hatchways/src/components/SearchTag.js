import React from "react";

const SearchTag = ({handleSearchTag, placeholder}) => {
    return (
        <div className = 'search'> 
            <input 
                onChange= {(event) => handleSearchTag(event.target.value)}
                type= 'text'
                placeholder= {placeholder}
            />
        </div>
    )
}

export default SearchTag;