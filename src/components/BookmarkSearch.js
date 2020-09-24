import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const BookmarkSearch = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div className="bookmark-search">
      <Form>
        <Form.Group controlId="location">
          <Form.Control
            type="text"
            name="searchTerm"
            className="searchTerm"
            value={searchTerm || ''}
            placeholder="Search by title or url"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default BookmarkSearch;
