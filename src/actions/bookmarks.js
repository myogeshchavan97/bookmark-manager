import axios from 'axios';
import {
  SET_BOOKMARKS,
  ADD_BOOKMARK,
  EDIT_BOOKMARK,
  DELETE_BOOKMARK
} from '../utils/constants';
import { getErrors } from './errors';

export const setBookmarks = (bookmarks) => ({
  type: SET_BOOKMARKS,
  bookmarks
});

export const addBookmark = (bookmark) => ({
  type: ADD_BOOKMARK,
  bookmark
});

export const editBookmark = (bookmark) => ({
  type: EDIT_BOOKMARK,
  _id: bookmark._id,
  bookmark
});

export const deleteBookmark = (_id) => ({
  type: DELETE_BOOKMARK,
  _id
});

export const initiateGetBookmarks = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/api/getBookmarks',
        method: 'POST'
      });
      return dispatch(setBookmarks(data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const initiateAddBookmark = (bookmark) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/api/addBookmark',
        method: 'POST',
        data: bookmark
      });
      return dispatch(addBookmark(data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const initiateEditBookmark = (bookmark) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/api/editBookmark',
        method: 'PUT',
        data: bookmark
      });
      return dispatch(editBookmark(data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const initiateDeleteBookmark = (_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/api/deleteBookmark',
        method: 'DELETE',
        data: { _id }
      });
      return dispatch(deleteBookmark(data._id));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};
