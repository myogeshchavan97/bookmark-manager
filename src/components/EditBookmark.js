import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import BookmarkForm from './BookmarkForm';
import { initiateEditBookmark } from '../actions/bookmarks';
import useLoader from '../custom-hooks/useLoader';
import Loader from './Loader';

const EditBookmark = (props) => {
  const { isLoading, showLoader, hideLoader } = useLoader();
  const onSubmit = (bookmark) => {
    showLoader();
    props.dispatch(initiateEditBookmark(bookmark)).then(() => {
      hideLoader();
      props.history.push('/');
    });
  };

  return (
    <div>
      {!_.isEmpty(props.bookmark) ? (
        <React.Fragment>
          <Loader show={isLoading}>Loading...</Loader>
          <BookmarkForm onSubmit={onSubmit} {...props} {...props.bookmark} />
        </React.Fragment>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  bookmark: state.bookmarks.find(
    (bookmark) => bookmark._id === props.match.params.id
  )
});

export default connect(mapStateToProps)(EditBookmark);
