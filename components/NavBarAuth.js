/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Image,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faBell, faMagnifyingGlass, faMicrophoneAlt, faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { signIn, signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function NavBarAuth({ query, setQuery }) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg" bg="white">
        <div className="bar-bars"> <FontAwesomeIcon icon={faBars} /> </div>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="Logo" style={{ width: 100, marginTop: 1, marginLeft: 20 }} />
          </Navbar.Brand>
        </Link>
        <Container>
          <div className="wrap">
            <div className="input-group flex-nowrap">
              <input type="text" className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" />
              <span className="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            </div>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" />
        </Container>
        <div className="bar-mic"> <FontAwesomeIcon icon={faMicrophoneAlt} /> </div>
        <div className="bar-cam"> <FontAwesomeIcon icon={faVideo} /> </div>
        <div className="bar-bell"> <FontAwesomeIcon icon={faBell} /> </div>
        {user ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div id="Profile-logo" role="button" tabIndex={0} onClick={() => { setOpen(!open); }}>
            <button type="button" id="drop-btn" style={{ marginRight: '25px' }} onClick={() => setOpen((menu) => !menu)}>
              <Image
                id="Logo"
                src={user.photoURL}
                border-radius="250px"
                height="37"
                width="37"
              />
            </button>
            {open && (
            <div className="dropdown">
              <ul>
                <Link passHref href="/">
                  <li>Home</li>
                </Link>
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
    </div>
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
