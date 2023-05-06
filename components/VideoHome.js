import PropTypes from 'prop-types';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line import/no-extraneous-dependencies

const VideoHome = ({
  title, thumbnail, avatar, views, channel, publishedTime,
}) => {
  const shortNum = (viewCount) => {
    const numViews = (viewCount / 1000).toString();
    return `${numViews} K views`;
  };
  return (
    <>
      <Card style={{ width: '30rem' }}>
        <Card.Img className="rounded-3" variant="top" src={thumbnail} width="300" height="225" />
        <Card.Body className="card">
          <Card.Title><Image className="rounded-circle border-0" src={avatar} width="30" height="30" /> {title}</Card.Title>
          <Card.Text>
            <p className="fs-4">{channel}</p>
            <p>{shortNum(views)} &bull; {publishedTime}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    </>
  );
};

export default VideoHome;

VideoHome.propTypes = {
  // id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  channel: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,

};
