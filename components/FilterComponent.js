import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap';

const FilterComponent = ({ category }) => (
  <Button>{category}</Button>
);

export default FilterComponent;

FilterComponent.propTypes = {
  category: PropTypes.string.isRequired,
};
