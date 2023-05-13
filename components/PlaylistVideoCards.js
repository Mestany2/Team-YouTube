import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteVideoFromPlaylist } from '../api/videoData';

export default function PlaylistVideoCard({ videosObj, onUpdate }) {
  const deleteThisVideoFromPlaylist = () => {
    if (window.confirm(`Delete ${videosObj.title} from your playlist?`)) {
      deleteVideoFromPlaylist(videosObj.actualKey).then(() => onUpdate());
    }
  };

  return (
    <Card className="d-flex flex-row mb-2" style={{ width: '70rem', height: '9rem', border: 'none' }}>
      <Link href={`/${videosObj.video_id}--${videosObj.firebaseKey}`} passHref>
        <Card.Img style={{ width: '17rem', height: '150' }} src={videosObj.video_thumbnail} />
      </Link>
      <Card.Body className="ms-2 d-flex flex-column">
        <Card.Title style={{ marginBottom: '10px', fontSize: '25px' }}>{videosObj.title}</Card.Title>
        <Card.Text style={{ fontSize: '15px' }}>{videosObj.description}</Card.Text>
      </Card.Body>
      <div style={{ marginLeft: '20px' }} className="d-flex flex-column">
        <Button
          variant="danger"
          onClick={deleteThisVideoFromPlaylist}
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
      </div>
    </Card>
  );
}

PlaylistVideoCard.propTypes = {
  videosObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    video_id: PropTypes.string,
    category: PropTypes.string,
    video_thumbnail: PropTypes.string,
    likes: PropTypes.number,
    uid: PropTypes.string,
    upload_date: PropTypes.string,
    userName: PropTypes.string,
    user_photo: PropTypes.string,
    playlist_uid: PropTypes.string,
    actualKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
