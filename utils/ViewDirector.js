import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
// import Signin from '../components/Signin';
import NavBarAuth from '../components/NavBarAuth';
import SideBar from '../components/SideBar';
import { getAllVideos } from '../api/videoData';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const { user, userLoading } = useAuth();
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const unfilteredVideos = () => {
    getAllVideos().then((data) => {
      const videoArray = data;
      setVideos(videoArray);
    });
  };
  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  if (user) {
    return (
      <>
        <NavBarAuth query={query} setQuery={setQuery} user={user} />
        <SideBar setQuery={setQuery} unfilteredVideos={unfilteredVideos} />
        <div className="mx-auto" style={{ width: '90%' }}>
          <Component {...pageProps} query={query} setQuery={setQuery} videos={videos} setVideos={setVideos} unfilteredVideos={unfilteredVideos} />
        </div>
      </>
    );
  }
  // what the user should see if they are NOT logged in
  return (
    <>
      <NavBarAuth query={query} setQuery={setQuery} />
      <SideBar setQuery={setQuery} unfilteredVideos={unfilteredVideos} />
      <div className="mx-auto" style={{ width: '90%' }}>
        <Component {...pageProps} query={query} setQuery={setQuery} videos={videos} setVideos={setVideos} unfilteredVideos={unfilteredVideos} />
      </div>
    </>
  );
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
