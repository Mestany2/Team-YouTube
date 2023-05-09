import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const FilterComponent = ({ category, setQuery }) => {
  const [activeState, setActiveState] = useState(false);

  const handleButtonState = (e) => {
    if (e.target.value === 'ALL') {
      setQuery('');
    } else {
      setQuery(e.target.value.toLowerCase());
    }
    setActiveState(true);
  };
  return (
    <>
      {activeState ? <Button variant="dark" className="px-3 fw-semi-bold fs-5 py-1 mb-3" value={category} onClick={handleButtonState} active>{category}</Button>
        : <Button variant="light" className="px-3 fw-semi-bold fs-5 py-1 mb-3" value={category} onClick={handleButtonState}>{category}</Button>}

    </>

  );
};

export default FilterComponent;

FilterComponent.propTypes = {
  category: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

FilterComponent.defaultProps = {
  category: 'bass guitar',

};
