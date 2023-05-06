import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line import/no-extraneous-dependencies

const VideoHome = ({
  title, thumbnail, avatar, views, channel, publishedTime, id,
}) => {
  const shortNum = (viewCount) => {
    const numViews = (viewCount / 1000).toString();
    return `${numViews} K views`;
  };
  return (
    <>
      {/*
      <Image className="rounded-2 m-2" src={thumbnail} width="300" height="250" />
      <div className="d-flex wrap gap-3 ms-2 px-2">
        <Image className="rounded-circle" src={avatar} width="30" height="30" />
        <div className="p-2 bg-secondary">
          <h6 className="my-0 fw-semibold">{title} </h6>
        </div>
      </div> */}
      <Card style={{ width: '24rem', border: 'none' }}>
        <Link href={`/${id}`} passHref>
          <Image className="rounded-2 " src={thumbnail} width="300" height="120" />
        </Link>
        <Card.Body className="card">
          <Card.Title><Image className="rounded-circle" src={avatar} width="30" height="30" /> {title}</Card.Title>
          <Card.Text> <p className="fs-4">{channel}</p>
            <p>{shortNum(views)} &bull; {publishedTime}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default VideoHome;

VideoHome.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  channel: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,

};
