/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Image,
} from 'react-bootstrap';
import { signIn, signOut } from '../utils/auth';

export default function NavBarAuth({ query, setQuery, user }) {
  const [menu, setMenu] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg="white">

      <Link passHref href="/">
        <Navbar.Brand>
          <Image src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="logo" style={{ width: 100, marginTop: -7, marginLeft: 100 }} />
        </Navbar.Brand>
      </Link>
      <Container>
        <div className="wrap">
          <div className="search">
            <input type="search" className="searchTerm me-2 rounded-pill" value={query} placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" />
      </Container>
      {user ? (
        <div id="Profile-logo">
          <button type="button" id="drop-btn" style={{ marginRight: '25px' }} onClick={() => setMenu((open) => !open)}>
            <Image
              id="Logo"
              src={user.photoURL}
              border-radius="250px"
              height="37"
              width="37"
            />
          </button>
          {menu && (
          <div className="dropdown">
            <ul>
              <Link passHref href="/profile">
                <li>My Videos</li>
              </Link>
              <li><button type="button" id="drop-btn" onClick={signOut}> Sign Out</button></li>
            </ul>
          </div>
          )}
        </div>
      )
        : (
          <Nav className="me-auto">
            <Button variant="danger" onClick={signIn}>Sign In</Button>
          </Nav>
        )}
    </Navbar>
  );
}

NavBarAuth.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
  user: PropTypes.shape({
    photoURL: PropTypes.string,
  }).isRequired,

};

NavBarAuth.defaultProps = {
  query: '',
  setQuery: '',
};
