import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { getSingleVideo, updateVideo } from '../api/videoData';

const Likes = ({ vidObj, updateVideoHandler }) => {
  const addLikes = () => {
    const updatedVideo = { ...vidObj, likes: vidObj.likes + 1 };
    updateVideoHandler(updatedVideo);
  };
  return (
    <>
      <div>
        <button type="button" onClick={addLikes}><FontAwesomeIcon icon={faThumbsUp} />{vidObj.likes}</button>
      </div>
    </>
  );
};

export default Likes;

Likes.propTypes = {
  vidObj: PropTypes.shape,
  updateVideoHandler: PropTypes.func,
};

Likes.defaultProps = {
  vidObj: null,
  updateVideoHandler: null,
};
