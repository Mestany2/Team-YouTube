import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line import/no-extraneous-dependencies

const VideoHome = ({
  title, thumbnail, avatar, id,
}) => (
  <>
    <div className="w-25">
      <div className="d-flex flex-column gap-1">
        <Link href={`/${id}`} passHref>
          <Image className="rounded-2 " src={thumbnail} width="300" height="120" />
        </Link>
        <div className="d-flex flex-nowrap gap-2 ms-2 px-2">
          <Image className="rounded-circle" src={avatar} width="30" height="30" />
          <div className="p-2">
            <h6 className="my-0 fw-semibold">{title} </h6>
            {/* <p className="text-start">{id}</p> */}
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
