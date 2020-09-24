import {
  SET_BOOKMARKS,
  ADD_BOOKMARK,
  EDIT_BOOKMARK,
  DELETE_BOOKMARK
} from '../utils/constants';

const bookmarksReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BOOKMARKS:
      return action.bookmarks.reverse();
    case ADD_BOOKMARK:
      return [action.bookmark, ...state];
    case EDIT_BOOKMARK:
      return state.map((bookmark) => {
        if (bookmark._id === action._id) {
          return {
            ...bookmark,
            ...action.bookmark
          };
        } else {
          return bookmark;
        }
      });
    case DELETE_BOOKMARK:
      return state.filter((bookmark) => bookmark._id !== action._id);
    default:
      return state;
  }
};

export default bookmarksReducer;
