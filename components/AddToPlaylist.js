import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { addToPlaylist, updatePlaylist } from '../api/videoData';

const initialState = {
  firebaseKey: '',
  title: '',
  description: '',
  video_id: '',
  category: '',
  video_thumbnail: '',
  likes: '',
  uid: '',
  upload_date: '',
  userName: '',
  user_photo: '',
};

export default function AddToPlaylist({ obj, playlistUid, currentFirebaseKey }) {
  const [videoObj, setVidObj] = useState(initialState);
  useEffect(() => {
    setVidObj(obj);
  }, [obj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const playload = { ...videoObj, playlist_uid: playlistUid };
    addToPlaylist(playload).then(({ name }) => {
      const patchPayload = { firebaseKey: currentFirebaseKey, actualKey: name };
      updatePlaylist(patchPayload, name).then(() => {
        window.alert('Added to Playlist');
      });
    });
  };

  return (
    <>
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        style={{
          borderRadius: '10px',
          height: '40px',
          fontWeight: '600',
        }}
      >
        Add to playlist
      </Button>
    </>
  );
}

AddToPlaylist.propTypes = {
  obj: PropTypes.shape({
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
  }).isRequired,
  playlistUid: PropTypes.string.isRequired,
  currentFirebaseKey: PropTypes.string.isRequired,
};
