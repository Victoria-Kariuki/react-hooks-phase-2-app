import React from 'react';

const SearchBar = (props) => {
  return (
    <div className=''>
      <input 
        className="form-control" 
        placeholder="Search...." 
        onChange={(event) => props.setSearchValue(event.target.value)} 
        value={props.value}
      />
    </div>
  )
}

export default SearchBar