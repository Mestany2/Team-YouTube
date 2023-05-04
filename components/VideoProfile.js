import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteVideo } from '../api/videoData';

export default function UsersVideos({ videosObj, onUpdate }) {
  const deleteThisVideo = () => {
    if (window.confirm(`Delete ${videosObj.title}?`)) {
      deleteVideo(videosObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card className="d-flex flex-row mb-2" style={{ width: '50rem', height: '9rem' }}>
      <Card.Img style={{ width: '17rem', height: '150' }} src={videosObj.thumbnail} />
      <Card.Body className="ms-2 d-flex flex-column">
        <Card.Title style={{ marginBottom: '20px' }}>{videosObj.title}</Card.Title>
        <Card.Text>{videosObj.description}</Card.Text>
      </Card.Body>
      <div style={{ marginLeft: '20px' }} className="d-flex flex-column">
        <Button
          variant="danger"
          onClick={deleteThisVideo}
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: 'white',
            color: 'red',
            border: 'none',
          }}
        >
          X
        </Button>
        <Button style={{
          height: '40px',
          width: '40px',
          backgroundColor: 'white',
          color: 'blue',
          border: 'none',
        }}
        >
          ✎
        </Button>
      </div>
    </Card>
  );
}

UsersVideos.propTypes = {
  videosObj: PropTypes.shape({
    category: PropTypes.string,
    firebaseKey: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    uid: PropTypes.string,
    upload_date: PropTypes.string,
    user_photo: PropTypes.string,
    video_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
