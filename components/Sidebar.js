import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown, faClapperboard, faClock, faClockRotateLeft, faFilm, faHouse, faPlayCircle, faThumbsUp, faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';

const SideBar = () => (
  <>
    <div className="side-bar">
      <br />
      <FontAwesomeIcon icon={faHouse} /> <Link passHref href="/" className="links active"> Home </Link> <br />
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

export default SideBar;

// import {
//   faHouse, faCode, faDumbbell, faGamepad, faMusic,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export const sidebarCategories = [
//   { name: 'Home', icon: <FontAwesomeIcon icon={faHouse} /> },
//   { name: 'Coding', icon: <FontAwesomeIcon icon={faCode} /> },
//   { name: 'ReactJS', icon: <FontAwesomeIcon icon={faCode} /> },
//   { name: 'NextJS', icon: <FontAwesomeIcon icon={faCode} /> },
//   { name: 'Music', icon: <FontAwesomeIcon icon={faMusic} /> },
//   { name: 'Education', icon: <FontAwesomeIcon icon={faCode} /> },
//   { name: 'Podcast', icon: <FontAwesomeIcon icon={faCode} /> },
//   { name: 'Movie', icon: <FontAwesomeIcon icon={faCode} /> },
//   { name: 'Gaming', icon: <FontAwesomeIcon icon={faGamepad} /> },
//   { name: 'Gym', icon: <FontAwesomeIcon icon={faDumbbell} /> },
