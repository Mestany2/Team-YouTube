import {
  faHouse, faCode, faDumbbell, faGamepad, faMusic,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const sidebarCategories = [
  { name: 'Home', icon: <FontAwesomeIcon icon={faHouse} /> },
  { name: 'Coding', icon: <FontAwesomeIcon icon={faCode} /> },
  { name: 'ReactJS', icon: <FontAwesomeIcon icon={faCode} /> },
  { name: 'NextJS', icon: <FontAwesomeIcon icon={faCode} /> },
  { name: 'Music', icon: <FontAwesomeIcon icon={faMusic} /> },
  { name: 'Education', icon: <FontAwesomeIcon icon={faCode} /> },
  { name: 'Podcast', icon: <FontAwesomeIcon icon={faCode} /> },
  { name: 'Movie', icon: <FontAwesomeIcon icon={faCode} /> },
  { name: 'Gaming', icon: <FontAwesomeIcon icon={faGamepad} /> },
  { name: 'Gym', icon: <FontAwesomeIcon icon={faDumbbell} /> },

];

export const filterCategories = ['ALL', 'Coding', 'Music', 'Boxing', '3D Printing'];
