import React from 'react';
import { Button } from 'react-bootstrap';

const BookmarkItem = ({ _id, title, url, tag, handleEdit, handleDelete }) => {
  return (
    <div className="bookmark">
      <div>
        <div className="title">
          <strong>Title: </strong>
          {title}
        </div>
        <div className="url">
          <strong>URL: </strong>
          {url}
        </div>
        <div className="tag">
          <strong>Tag: </strong>
          {tag}
        </div>
      </div>
      <div className="buttons">
        <div className="btn">
          <Button
            variant="info"
            type="submit"
            size="sm"
            onClick={() => handleEdit(_id)}
          >
            Edit
          </Button>
        </div>
        <div className="btn">
          <Button
            variant="danger"
            type="submit"
            size="sm"
            onClick={() => handleDelete(_id, title)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkItem;
