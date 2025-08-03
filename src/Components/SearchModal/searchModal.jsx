import React, { useState } from 'react';
import './SearchModal.css';

function SearchModal() {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Add actual search logic here
    setShowModal(false);
  };

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onClick={() => setShowModal(true)}
          readOnly
        />
        <i
          className="fas fa-search search-icon"
          onClick={() => setShowModal(true)}
        ></i>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Search</h3>
            <input
              type="text"
              className="modal-search-input"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchModal;
