import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteVideo } from '../api/videoData';
import VideoForm from './forms/VideoForm';

export default function UsersVideos({ videosObj, onUpdate, formOnUpdate }) {
  const deleteThisVideo = () => {
    if (window.confirm(`Delete ${videosObj.title}?`)) {
      deleteVideo(videosObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card className="d-flex flex-row mb-2" style={{ width: '70rem', height: '9rem', border: 'none' }}>
      <Card.Img style={{ width: '17rem', height: '150' }} src={videosObj.video_thumbnail || videosObj.thumbnail} />
      <Card.Body className="ms-2 d-flex flex-column">
        <Card.Title style={{ marginBottom: '10px', fontSize: '25px' }}>{videosObj.title}</Card.Title>
        <Card.Text style={{ fontSize: '15px' }}>{videosObj.description}</Card.Text>
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
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <VideoForm
          buttonText={<FontAwesomeIcon icon={faPenToSquare} />}
          colorSet="#2873eb"
          bc="white"
          obj={videosObj}
          onUpdate={formOnUpdate}
        />
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
    video_thumbnail: PropTypes.string,
    uid: PropTypes.string,
    upload_date: PropTypes.string,
    user_photo: PropTypes.string,
    video_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  formOnUpdate: PropTypes.func.isRequired,
};
