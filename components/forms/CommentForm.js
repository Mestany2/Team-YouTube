import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createComment, getCommentsByVideoId, updateComment } from '../../api/videoData';
import CommentBox from '../CommentBox';

const initialState = {
  comment: '',
};

export default function CommentForm({ videoId, onUpdate }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const [comments, setComments] = useState();

  useEffect(() => {
    getCommentsByVideoId(videoId).then(setComments);
  }, [videoId]);

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
    getCommentsByVideoId(videoId).then(setComments);
  };

  return (
    <>
      <div className="d-flex flex-column" id="comment-conainer" style={{ width: '1400px' }}>
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
            <Button type="submit" onClick={onUpdate} style={{ borderRadius: '30px', height: '40px', fontWeight: '600' }}>Comment</Button>
          </div>
        </Form>
      </div>
      <div className="list-comments">
        {comments?.map((comment) => <CommentBox commObj={comment} videoId={comment.video_id} />)}
      </div>
    </>
  );
}

CommentForm.propTypes = {
  videoId: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
