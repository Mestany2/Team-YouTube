import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useAuth } from '../../utils/context/authContext';
import { updateVideo, uploadNewVideo } from '../../api/videoData';

const initialState = {
  title: '',
  description: '',
  video_id: '',
  category: '',
  thumbnail: '',
};

export default function VideoForm({ obj }) {
  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleClose = () => {
    setShow(false);
    router.push('/profile');
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateVideo(formInput).then(handleClose);
    } else {
      const payload = {
        ...formInput, uid: user.uid, likes: 0, upload_date: new Date(Date.now()),
      };
      console.warn(payload);
      uploadNewVideo(payload).then(({ name }) => {
        console.warn(name);
        const patchPayload = { firebaseKey: name };
        console.warn(patchPayload);
        updateVideo(patchPayload).then(() => {
          router.push('/profile');
          setShow(false);
        });
      });
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload New Video
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Upload'} Video</h2>

            {/* Video Title  */}
            <FloatingLabel controlId="floatingInput1" label="Video Title" className="mb-3" style={{ color: 'red' }}>
              <Form.Control
                type="text"
                placeholder="Enter Video Title"
                name="title"
                value={formInput.title}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* Video Description  */}
            <FloatingLabel controlId="floatingInput3" label="Video Description" className="mb-3" style={{ color: 'red' }}>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                name="description"
                value={formInput.description}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* Video ID */}
            <FloatingLabel controlId="floatingInput3" label="Video ID" className="mb-3" style={{ color: 'red' }}>
              <Form.Control
                type="text"
                placeholder="Enter Video ID"
                name="video_id"
                value={formInput.video_id}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* Video Category */}
            <FloatingLabel controlId="floatingInput3" label="Video Category" className="mb-3" style={{ color: 'red' }}>
              <Form.Control
                type="text"
                placeholder="Enter Video Category"
                name="category"
                value={formInput.category}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* Video Thumbnail */}
            <FloatingLabel controlId="floatingInput3" label="Video Thumbnail" className="mb-3" style={{ color: 'red' }}>
              <Form.Control
                type="text"
                placeholder="Enter Video Thumbnail"
                name="video_thumbnail"
                value={formInput.video_thumbnail}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            <Button type="submit">{obj.firebaseKey ? 'Update' : 'Upload'} Video</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}

VideoForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    video_id: PropTypes.string,
    category: PropTypes.string,
    thumbnail: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

VideoForm.defaultProps = {
  obj: initialState,
};
