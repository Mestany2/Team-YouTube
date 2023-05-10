import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
// import Card from 'react-bootstrap/Card';
// eslint-disable-next-line import/no-extraneous-dependencies

const VideoHome = ({
  title, thumbnail, avatar, id, firebaseKey,
}) => (
  <>
    <div>
      <div className="video">
        <div>
          <Link passHref href={`/${id}--${firebaseKey}`}>
            <div>
              <Image className="rounded-4 " src={thumbnail} width="375" height="225" />
            </div>
          </Link>
        </div>
        <div className="d-flex ps-4 pt-2">
          <div style={{ width: '24px', height: '24px' }}>
            <Image className="rounded-circle" src={avatar} width="45" height="36" />
          </div>
          <div className="d-flex flex-column align-items-start px-3">
            <p className="fs-5 fw-semibold" style={{ width: '15rem' }}>{title}</p>
          </div>
        </div>
      </div>
    </div>

  </>
);

export default VideoHome;

VideoHome.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string.isRequired,
};
