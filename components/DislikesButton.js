import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Dislikes = ({ vidObj, updateVideoHandler }) => {
  const addDislikes = () => {
    const updatedVideo = { ...vidObj, dislikes: vidObj.dislikes + 1 };
    updateVideoHandler(updatedVideo);
  };
  return (
    <>
      <div>
        <button className="dislikesButton" type="button" onClick={addDislikes}><FontAwesomeIcon className="pe-2" icon={faThumbsDown} />{vidObj.dislikes ? vidObj.dislikes : 0}</button>
      </div>
    </>
  );
};

export default Dislikes;

Dislikes.propTypes = {
  vidObj: PropTypes.shape,
  updateVideoHandler: PropTypes.func,
};

Dislikes.defaultProps = {
  vidObj: null,
  updateVideoHandler: null,
};
