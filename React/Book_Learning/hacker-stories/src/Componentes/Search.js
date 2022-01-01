import React from "react";

const Search = ({onSearch, searchTerm}) => {
  
  
  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={onSearch} />
      
      <p>Searching for <strong>{searchTerm}</strong> </p>

    </div>
  )
};

export default Search;
