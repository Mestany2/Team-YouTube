import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  getSingleVideo, getAllVideos, getCommentsByVideoId, updateVideo,
} from '../api/videoData';
import RecomendedVideos from '../components/VideoRecommended';
import SideBar from '../components/SideBar';
import CommentForm from '../components/forms/CommentForm';
import Likes from '../components/LikesButton';

function Player() {
  const router = useRouter();
  const { videoId } = router.query;
  const [vidObj, setVidObj] = useState({});
  const [allVidsArray, setAllVidsArray] = useState([]);
  const [videoKey, firebaseKey] = videoId.split('--');

  useEffect(() => {
    getSingleVideo(firebaseKey).then(setVidObj);
    getAllVideos().then(setAllVidsArray);
    getCommentsByVideoId(videoKey).then();
  }, [videoKey, firebaseKey]);

  const getVidComments = () => { getCommentsByVideoId(videoKey).then(); };

  const updateVideoHandler = (vidEntity) => {
    updateVideo(vidEntity).then((data) => setVidObj(data));
  };

  const vidArrayLimit = allVidsArray.slice(0, 7);
  return (
    <>
      <title>Video Player</title>
      <SideBar />
      <div className="outer-container d-flex">
        <div className="player-container">
          <iframe src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen width="1175" height="609" />

          <div><h2>{vidObj?.title}</h2></div>
          <div className="d-flex flex-nowrap gap-2">
            <div style={{ width: '150px', height: '40px' }}>
              {vidObj.user_photo && (<Image className="rounded-circle" src={vidObj.user_photo} alt="image" width="75" height="75" />)}
            </div>
            <div className="p-2">
              <h5 className="my-0 fw-semibold">{vidObj?.userName}</h5>
              <p style={{ maxWidth: '500px' }}>{vidObj?.description}</p>
              <Likes vidObj={vidObj} updateVideoHandler={updateVideoHandler} />
            </div>
          </div>
          <span>Comments</span>
          <div className="comment-container">
            <div>
              <CommentForm videoId={videoKey} onUpdate={getVidComments} />
            </div>
          </div>
        </div>
        <div className="recom-section">
          {vidArrayLimit.map((video) => <RecomendedVideos key={video.firebaseKey} videosObj={video} />)}
        </div>
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
