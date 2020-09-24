import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TAGS } from '../utils/constants';

const BookmarkForm = (props) => {
  const [state, setState] = useState({
    title: props.title ? props.title : '',
    url: props.url ? props.url : '',
    tag: props.tag ? props.tag : 'React',
    tags: TAGS,
    errorMsg: ''
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const { title, url, tag } = state;
    const { _id } = props;
    const isEditPage = !!props.title;

    if (title.trim() !== '' && url.trim() !== '' && tag.trim() !== '') {
      let data = { title, url, tag };
      if (isEditPage) {
        data = { ...data, _id };
      }
      props.onSubmit(data);
    } else {
      setState((prevState) => ({
        ...prevState,
        errorMsg: 'Please fill out all the fields.'
      }));
    }
  };

  const { title, url, tags, tag, errorMsg } = state;
  return (
    <form onSubmit={onFormSubmit}>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title || ''}
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>URL</Form.Label>
        <Form.Control
          type="text"
          name="url"
          value={url || ''}
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group controlId="amount">
        <Form.Label>Tag</Form.Label>
        <Form.Control
          as="select"
          name="tag"
          value={tag || ''}
          onChange={onInputChange}
        >
          {tags.map((tag, index) => (
            <option key={index}>{tag}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default BookmarkForm;
