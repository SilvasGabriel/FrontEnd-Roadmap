import React from "react";

const Search = ({onChange}) => {
  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={onChange} />
    </div>
  )
};

export default Search;
