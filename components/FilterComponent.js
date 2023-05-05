import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const FilterComponent = ({ category, setQuery }) => (
  <Button variant="secondary" value={category} onClick={(e) => setQuery(e.target.value)}>{category}</Button>
);

export default FilterComponent;

FilterComponent.propTypes = {
  category: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

FilterComponent.defaultProps = {
  category: 'bass guitar',

};
