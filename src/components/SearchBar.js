import React, { useState } from 'react';
import '../styles/SearchBar.css';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if(query.trim() !== '') // checks if query is empty or only whitespace 
      onSearch(query, () => setQuery(''));
  };

  // Search works with Enter key
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <input
        className='search-bar-input'
        type="text"
        placeholder="Enter city name..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className='search-bar-button' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
