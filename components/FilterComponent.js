import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
// import { getAllVideos } from '../api/videoData';

const FilterComponent = ({ filterCategories, setQuery, unfilteredVideos }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleButtonState = (targetValue) => {
    if (targetValue === 'ALL') {
      unfilteredVideos();
      setQuery('');
    } else {
      setQuery(targetValue);
    }
  };

  return (
    <>

      {filterCategories.map((category, index) => (
        selectedIndex === index ? <Button variant="dark" className="px-4 mx-2 fw-semi-bold fs-5 py-1 mb-3" value={category} onClick={handleButtonState} active>{category}</Button>
          : (
            <Button
              variant="light"
              className="px-4 mx-2 fw-semi-bold fs-5 py-1 mb-3"
              value={category}
              onClick={(e) => {
                setSelectedIndex(index);
                handleButtonState(e.target.value);
              }}
            >{category}
            </Button>
          )
      ))}

    </>

  );
};
export default FilterComponent;

FilterComponent.propTypes = {
  setQuery: PropTypes.func.isRequired,
  unfilteredVideos: PropTypes.func.isRequired,
  filterCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
