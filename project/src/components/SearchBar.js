import React, { useState } from 'react';
import '../styles/SearchBar.css'; // Adjust the path as needed


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
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
