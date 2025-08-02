import React, { useState } from 'react';
import './searchModal.css';

function SearchModal() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    setShowModal(false);
  };

  return (
    <div>
      <button className="search-icon-button" onClick={() => setShowModal(true)}>
        <i className="fas fa-search"></i>
      </button>

      {showModal && (
        <div className="search-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchModal;
