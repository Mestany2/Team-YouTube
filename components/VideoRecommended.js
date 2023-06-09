import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function RecomendedVideos({ videosObj }) {
  return (
    <Card className="d-flex flex-row mb-1" style={{ width: '28rem', height: '8rem', border: 'none' }}>
      <Link href={`/${videosObj?.video_id}--${videosObj?.firebaseKey}`} passHref>
        <Card.Img style={{ width: '12rem', height: '7rem' }} src={videosObj?.video_thumbnail || videosObj?.thumbnail} />
      </Link>
      <Card.Body className="ms-2 d-flex flex-column">
        <Card.Title style={{ marginBottom: '20px', fontSize: '17px', fontWeight: '600' }}>{videosObj?.title}</Card.Title>
        <div className="d-flex">
          <Card.Img
            src={videosObj?.user_photo}
            style={{
              height: '22px',
              width: '22px',
              marginRight: '10px',
              borderRadius: '100px',
            }}
          />
          <Card.Text style={{ fontSize: '14px' }}>{videosObj?.userName}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

RecomendedVideos.propTypes = {
  videosObj: PropTypes.shape({
    category: PropTypes.string,
    firebaseKey: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    video_thumbnail: PropTypes.string,
    uid: PropTypes.string,
    upload_date: PropTypes.string,
    userName: PropTypes.string,
    user_photo: PropTypes.string,
    video_id: PropTypes.string,
  }).isRequired,
};
