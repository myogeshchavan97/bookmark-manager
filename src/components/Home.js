import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  initiateGetBookmarks,
  initiateDeleteBookmark
} from '../actions/bookmarks';
import BookmarkList from './BookmarkList';
import BookmarkSearch from './BookmarkSearch';
import Filters from './Filters';
import Loader from './Loader';
import useLoader from '../custom-hooks/useLoader';
import { isMatch } from '../utils/functions';

const Home = ({ bookmarksList, errorMsg, dispatch, history }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const { isLoading, showLoader, hideLoader } = useLoader();

  const getBookmarks = () => {
    showLoader();
    dispatch(initiateGetBookmarks())
      .then(() => {
        setBookmarks(bookmarksList);
        hideLoader();
      })
      .catch(() => hideLoader());
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  useEffect(() => {
    setBookmarks(bookmarksList);
  }, [bookmarksList]);

  const handleEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  const handleDelete = (id, title) => {
    const shouldDelete = window.confirm(
      `Are you sure you want to delete the bookmark with title ${title}?`
    );
    if (shouldDelete) {
      showLoader();
      dispatch(initiateDeleteBookmark(id))
        .then(() => {
          handleFilterClick('All');
          hideLoader();
        })
        .catch(() => hideLoader());
    }
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      setBookmarks(
        bookmarksList.filter((bookmark) => {
          const isTagMatch = isMatch(bookmark.tag, activeFilter);
          if (activeFilter !== '' && activeFilter !== 'All' && !isTagMatch) {
            return false;
          }

          const isTitleMatch = isMatch(bookmark.title, searchTerm);
          const isURLMatch = isMatch(bookmark.url, searchTerm);

          if (isTitleMatch || isURLMatch) {
            return true;
          }
          return false;
        })
      );
    } else {
      if (activeFilter !== 'All') {
        setBookmarks(
          bookmarksList.filter((bookmark) =>
            isMatch(bookmark.tag, activeFilter)
          )
        );
      } else {
        setBookmarks(bookmarksList);
      }
    }
  };

  const filterResults = (tag) => {
    if (tag !== 'All') {
      setBookmarks(bookmarksList.filter((bookmark) => bookmark.tag === tag));
    } else {
      setBookmarks(bookmarksList);
    }
  };

  const handleFilterClick = (tag) => {
    setActiveFilter(tag);
  };

  return (
    <React.Fragment>
      <BookmarkSearch handleSearch={handleSearch} />
      <Filters
        filterResults={filterResults}
        activeFilter={activeFilter}
        handleFilterClick={handleFilterClick}
      />
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Loader show={isLoading}>Loading...</Loader>
      {bookmarks.length > 0 ? (
        <BookmarkList
          bookmarks={bookmarks}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <p className="no-result">No bookmarks found.</p>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  bookmarksList: state.bookmarks,
  errorMsg: state.errorMsg
});

export default connect(mapStateToProps)(Home);
