import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
// import Card from 'react-bootstrap/Card';
// eslint-disable-next-line import/no-extraneous-dependencies

const VideoHome = ({
  title, thumbnail, avatar, id,
}) => (
  <>
    <div>
      <div className="mb-3 " style={{ width: '24rem', border: 'none' }}>
        <div>
          <Link href={`/${id}`} passHref>
            <Image className="rounded-4 " src={thumbnail} width="375" height="225" />
          </Link>
        </div>
        <div className="d-flex ps-4 pt-2">

          <div style={{ width: '24px', height: '24px' }}>
            <Image className="rounded-circle" src={avatar} width="36" height="36" />
          </div>
          <div className="d-flex flex-column align-items-start px-3">
            <p className="fs-5 fw-semibold">{title}</p>
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

};
