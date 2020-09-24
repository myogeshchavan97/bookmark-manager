import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="main-heading">Bookmark Manager</h1>
      <div className="header-links">
        <Link to="/add" className="link">
          Add Bookmark
        </Link>
        <Link to="/" className="link">
          Bookmarks List
        </Link>
      </div>
    </header>
  );
};

export default Header;
