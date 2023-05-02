/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth({ query, setQuery }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Logo Here</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <div className="wrap">
              <div className="search">
                <input type="search" className="searchTerm me-2 rounded-pill" value={query} placeholder="search" onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBarAuth.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,

};

NavBarAuth.defaultProps = {
  query: '',
  setQuery: '',
};
