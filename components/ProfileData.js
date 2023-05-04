/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function ProfileCard() {
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
        <Card.Img style={{ borderRadius: '100px', width: '195px' }} src={user.photoURL} alt="Profile" />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{user.displayName}</Card.Title>
          <Card.Subtitle>Video Count</Card.Subtitle>
        </Card.Body>
        <Button type="button" className="signOUT" onClick={signOut}>Sign Out</Button>
      </Card>
    </>
  );
}
