import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getSingleYTVideo } from '../api/videoData';

function Player() {
  const router = useRouter();
  const { videoId } = router.query;
  const [vidObj, setVidObj] = useState({});

  console.warn('videoid:', videoId);

  useEffect(() => {
    getSingleYTVideo(videoId).then((data) => (setVidObj(data)));
  }, [videoId]);

  console.warn('test', vidObj);

  return (
    <>
      <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen width="905" height="509" />

      <div><h2>{vidObj?.title || vidObj.title}</h2></div>
      <div className="d-flex flex-nowrap gap-2 ms-2 px-2">
        <Image className="rounded-circle" src={vidObj?.author?.avatar[0]?.url || vidObj.user_photo} width="40" height="40" />
        <div className="p-2">
          <h5 className="my-0 fw-semibold">{vidObj?.author?.title || vidObj.userName}</h5>
          <p>{vidObj?.author?.stats?.subscribersText && vidObj?.author?.stats?.subscribersText}</p>
        </div>
        {/* <div className="p-2">
          <h5 className="my-0 fw-semibold">title</h5>
          <p>test</p>
        </div> */}
      </div>
    </>
  );
}

export default Player;

// Player.propTypes = {
//   // category: PropTypes.string,
//   // firebaseKey: PropTypes.string,
//   // description: PropTypes.string,
//   // likes: PropTypes.number,
//   // title: PropTypes.string,
//   // thumbnail: PropTypes.string,
//   // uid: PropTypes.string,
//   // upload_date: PropTypes.string,
//   // userName: PropTypes.string,
//   // user_photo: PropTypes.string,
//   // videoId: PropTypes.string,
//   // avatar: PropTypes.string,
// };

// Player.defaultProps = {
//   category: '',
//   firebaseKey: '',
//   description: '',
//   likes: 0,
//   title: '',
//   thumbnail: '',
//   uid: '',
//   upload_date: '',
//   userName: '',
//   user_photo: '',
//   // videoId: '',
//   avatar: '',
// };
