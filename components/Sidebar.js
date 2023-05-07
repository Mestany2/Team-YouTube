import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import { sidebarCategories } from '../utils/data/categories';

const Sidebar = ({ setQuery }) => (
  <>
    <div>
      {sidebarCategories.map((category) => (
        <>
          <Image src={category.icon} width="16" height="16" />
          <Button variant="light" className="px-3 fw-semi-bold fs-5 py-1 mb-3" value={category} onClick={(e) => setQuery(e.target.value)}>{category}</Button>
        </>
      ))}
    </div>
  </>

);

export default Sidebar;

Sidebar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
