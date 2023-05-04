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
        <NavBarAuth query={query} setQuery={setQuery} /> {/* NavBar only visible if user is logged in and is in every view */}
        <div className="container">
          <Component {...pageProps} query={query} />
        </div>
      </>
    );
  }

  return (
    <>
      <NavBarAuth query={query} setQuery={setQuery} /> {/* NavBar only visible if user is logged in and is in every view */}
      <div className="container">
        <Component {...pageProps} query={query} />
      </div>
    </>
  );
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
