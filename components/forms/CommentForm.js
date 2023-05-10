import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createComment, updateComment } from '../../api/videoData';

const initialState = {
  comment: '',
};

export default function CommentForm({ videoId }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formInput, userName: user.displayName, user_photo: user.photoURL, video_id: videoId,
    };
    createComment(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateComment(patchPayload).then(() => {
        setFormInput(initialState);
      });
    });
  };

  return (
    <>
      <div className="d-flex flex-column" style={{ width: '1400px' }}>
        <Form onSubmit={handleSubmit} className="d-flex">
          <div className="d-flex" style={{ width: '1069px' }}>
            <Card.Img src={user.photoURL} style={{ width: '50px', borderRadius: '100px' }} className="me-3 d-flex flex-column" />
            <Form.Control
              type="text"
              placeholder="Add a comment..."
              name="comment"
              value={formInput.comment}
              onChange={handleChange}
              className="d-flex"
              required
            />
          </div>
          <div className="text-right m-2" style={{ textAlign: 'right' }}>
            <Button type="submit" style={{ borderRadius: '30px', height: '40px', fontWeight: '600' }}>Comment</Button>
          </div>
        </Form>
      </div>
    </>
  );
}

CommentForm.propTypes = {
  videoId: PropTypes.string.isRequired,
};
