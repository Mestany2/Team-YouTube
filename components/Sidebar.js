import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Sidebar = ({ category, setQuery }) => (
  <>
    <div>
      <Button variant="light" className="px-3 fw-semi-bold fs-5 py-1 mb-3" value={category} onClick={(e) => setQuery(e.target.value)}>{category}</Button>
    </div>
  </>

);

export default Sidebar;

Sidebar.propTypes = {
  category: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  category: 'bass guitar',

};
