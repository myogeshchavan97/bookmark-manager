import React from 'react';
import BookmarkItem from './BookmarkItem';

const BookmarkList = ({ bookmarks, handleEdit, handleDelete }) => {
  return (
    <div className="bookmarks-list">
      {bookmarks.map((bookmark) => (
        <BookmarkItem
          key={bookmark._id}
          {...bookmark}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default BookmarkList;
