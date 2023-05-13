import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown, faClapperboard, faClock, faClockRotateLeft, faFilm, faHouse, faPlayCircle, faThumbsUp, faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ setQuery, unfilteredVideos }) => {
  const router = useRouter();
  return (
    <>
      <div className="side-bar">
        <br />
        <FontAwesomeIcon icon={faHouse} />
        <Button
          className="bt bg-transparent border-0"
          variant="light"
          onClick={() => {
            router.push('/');
            setQuery('');
            unfilteredVideos();
          }}
        >Home
        </Button> <br />
        <br />
        <FontAwesomeIcon icon={faFilm} /> <Link passHref href="/" className="links"> Shorts </Link> <br />
        <br />
        <FontAwesomeIcon icon={faVideoCamera} /> <Link passHref href="/profile"> My Videos </Link> <br />
        <hr className="seperator" />
        <FontAwesomeIcon icon={faPlayCircle} /> <Link passHref href="/" className="links"> Library</Link> <br />
        <br />
        <FontAwesomeIcon icon={faClockRotateLeft} /><Link passHref href="/" className="links"> History </Link> <br />
        <br />
        <FontAwesomeIcon icon={faClapperboard} /><Link passHref href="/profile" className="links"> My Playlist </Link> <br />
        <br />
        <FontAwesomeIcon icon={faClock} /><Link passHref href="/" className="links"> Watch Later </Link> <br />
        <br />
        <FontAwesomeIcon icon={faThumbsUp} /><Link passHref href="/" className="links"> Liked Videos </Link> <br />  <br />
        <FontAwesomeIcon icon={faArrowDown} /><Link passHref href="/" className="links"> Show More</Link> <br />
      </div>
    </>
  );
};
export default SideBar;

SideBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  unfilteredVideos: PropTypes.func.isRequired,
};
