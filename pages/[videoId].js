import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  getSingleVideo, getAllVideos, getCommentsByVideoId, updateVideo, getVideoFromAllPlaylist,
} from '../api/videoData';
import RecomendedVideos from '../components/VideoRecommended';
import CommentForm from '../components/forms/CommentForm';
import Likes from '../components/LikesButton';
import { useAuth } from '../utils/context/authContext';
import AddToPlaylist from '../components/AddToPlaylist';
import Dislikes from '../components/DislikesButton';

function Player() {
  const router = useRouter();
  const { videoId } = router.query;
  const [vidObj, setVidObj] = useState({});
  const [allVidsArray, setAllVidsArray] = useState([]);
  const [videoKey, firebaseKey] = videoId.split('--');
  const { user } = useAuth();

  useEffect(() => {
    getSingleVideo(firebaseKey).then(setVidObj);
    getAllVideos().then(setAllVidsArray);
    getCommentsByVideoId(videoKey).then();
    getVideoFromAllPlaylist(firebaseKey).then((videoArray) => {
      console.warn(`Video array ${videoArray}`);
    });
  }, [videoKey, firebaseKey]);

  const getVidComments = () => { getCommentsByVideoId(videoKey).then(); };

  const updateVideoHandler = (vidEntity) => {
    updateVideo(vidEntity).then((data) => setVidObj(data));
  };

  const vidArrayLimit = allVidsArray.slice(0, 9);
  return (
    <>
      <title>Video Player</title>

      <div className="outer-container d-flex">
        <div className="player-container">
          <iframe src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen width="1175" height="609" />

          <div className="d-flex justify-content-between" style={{ width: '1175px' }}>
            <h2>{vidObj?.title}</h2>
            <AddToPlaylist obj={vidObj} playlistUid={user.uid} currentFirebaseKey={firebaseKey} />
          </div>
          <div className="d-flex flex-nowrap gap-2">
            <div style={{ width: '150px', height: '40px' }}>
              {vidObj.user_photo && (<Image className="rounded-circle" src={vidObj.user_photo} alt="image" width="75" height="75" />)}
            </div>
            <div className="p-2">
              <h5 className="my-0 fw-semibold">{vidObj?.userName}</h5>
              <p style={{ maxWidth: '500px' }}>{vidObj?.description}</p>
              <div className="d-flex flex-nowrap gap-2">
                <Likes vidObj={vidObj} updateVideoHandler={updateVideoHandler} />
                <Dislikes vidObj={vidObj} updateVideoHandler={updateVideoHandler} />
              </div>
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
