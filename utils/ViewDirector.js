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


  if (user) {
    return (
      <>
        <NavBarAuth query={query} setQuery={setQuery} user={user} />
        <Component {...pageProps} query={query} setQuery={setQuery} />

      </>
    );
  }
  // what the user should see if they are NOT logged in
  return (
    <>
      <NavBarAuth query={query} setQuery={setQuery} />
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
