import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const FilterComponent = ({ category }) => (
  <Button variant="secondary" value={category}>{category}</Button>
);

export default FilterComponent;

FilterComponent.propTypes = {
  category: PropTypes.string,
};

FilterComponent.defaultProps = {
  category: 'bass guitar',
};
