import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
// import Signin from '../components/Signin';
import NavBarAuth from '../components/NavBarAuth';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const { user, userLoading } = useAuth();
  const [query, setQuery] = useState('');
  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <NavBarAuth query={query} setQuery={setQuery} user={user} /> {/* NavBar only visible if user is logged in and is in every view */}
        {/* <div className="mx-auto" style={{ width: '100%' }}> */}
        <Component {...pageProps} query={query} setQuery={setQuery} />
        {/* </div> */}
      </>
    );
  }

  return (
    <>
      <NavBarAuth query={query} setQuery={setQuery} /> {/* NavBar only visible if user is logged in and is in every view */}
      <div className="mx-auto" style={{ width: '80%' }}>
        <Component {...pageProps} query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
