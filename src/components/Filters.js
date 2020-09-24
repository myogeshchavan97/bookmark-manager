import React from 'react';
import { TAGS } from '../utils/constants';

const Filters = ({ activeFilter, filterResults, handleFilterClick }) => {
  const handleClick = (tag) => {
    filterResults(tag);
    handleFilterClick(tag);
  };

  return (
    <div className="filters-list">
      <div className="filters">
        {TAGS.map((tag, index) => (
          <div
            key={index}
            onClick={() => handleClick(tag)}
            className={activeFilter === tag ? 'active' : ''}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
