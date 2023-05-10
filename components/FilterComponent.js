import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
// import { getAllVideos } from '../api/videoData';

const FilterComponent = ({ category, setQuery, unfilteredVideos }) => {
  const [activeState, setActiveState] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);

  const handleButtonState = (e) => {
    if (e.target.value === 'ALL') {
      unfilteredVideos();
      setQuery('');
      setButtonClick(true);
    } else {
      setQuery(e.target.value);
      setButtonClick((prev) => !prev);
    }
  };
  useEffect(() => {
    setActiveState((prev) => !prev);
    setButtonClick(false);
  }, [buttonClick]);

  return (
    <>
      {activeState ? <Button variant="dark" className="px-5 fw-semi-bold fs-5 py-1 mb-3" value={category} onClick={handleButtonState} active>{category}</Button>
        : <Button variant="light" className="px-5 fw-semi-bold fs-5 py-1 mb-3" value={category} onClick={handleButtonState}>{category}</Button>}

    </>

  );
};

export default FilterComponent;

FilterComponent.propTypes = {
  category: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  unfilteredVideos: PropTypes.func.isRequired,
};
