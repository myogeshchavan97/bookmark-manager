const { gql } = require('apollo-boost');

const GET_BOOKMARKS = gql`
  query {
    bookmarks {
      data {
        _id
        title
        url
        tag
      }
    }
  }
`;

const ADD_BOOKMARK = gql`
  mutation($title: String!, $url: String!, $tag: String!) {
    createBookmark(data: { title: $title, url: $url, tag: $tag }) {
      _id
      title
      url
      tag
    }
  }
`;

const EDIT_BOOKMARK = gql`
  mutation($id: ID!, $title: String!, $url: String!, $tag: String!) {
    updateBookmark(id: $id, data: { title: $title, url: $url, tag: $tag }) {
      _id
      title
      url
      tag
    }
  }
`;

const DELETE_BOOKMARK = gql`
  mutation($id: ID!) {
    deleteBookmark(id: $id) {
      _id
    }
  }
`;

module.exports = {
  GET_BOOKMARKS,
  ADD_BOOKMARK,
  EDIT_BOOKMARK,
  DELETE_BOOKMARK
};
