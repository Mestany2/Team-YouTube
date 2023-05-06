/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function ProfileCard({ count }) {
  const { user } = useAuth();

  return (
    <>
      <Card
        className="pf-data d-flex mb-4"
        style={{
          width: '25rem',
          display: 'flex',
          flexDirection: 'row',
          border: 'none',
        }}
      >
        <Card.Img style={{ borderRadius: '100px', width: '170px' }} src={user.photoURL} alt="Profile" />
        <Card.Body>
          <Card.Title style={{ color: 'black', fontSize: '30px' }}>{user.displayName}</Card.Title>
          <Card.Subtitle>{count} Videos</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}

ProfileCard.propTypes = {
  count: PropTypes.number,
};

ProfileCard.defaultProps = {
  count: 0,
};
