import PropTypes from 'prop-types';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies

const VideoHome = ({ snippet }) => (
  <>
    <div className="w-25">
      <div className="d-flex flex-column gap-1">
        <Image className="rounded-2 " src={snippet.thumbnails.medium.url} width="300" height="120" />
        <div className="d-flex flex-nowrap gap-2 ms-2 px-2">
          <div className="p-2">
            <h6 className="my-0">{snippet.title} </h6>
            <p className="text-start">{snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default VideoHome;

VideoHome.propTypes = {
  id: PropTypes.shape({
    videoId: PropTypes.string,
  }).isRequired,
  snippet: PropTypes.shape({
    description: PropTypes.string,
    channelTitle: PropTypes.string,
    title: PropTypes.string,
    thumbnails: PropTypes.shape({
      medium: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
        url: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,

};
