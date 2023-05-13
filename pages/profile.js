/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ProfileCard from '../components/ProfileData';
import { getUserVideos, getAllInPlaylist } from '../api/videoData';
import { useAuth } from '../utils/context/authContext';
import UsersVideos from '../components/VideoProfile';
import VideoForm from '../components/forms/VideoForm';
import PlaylistVideoCard from '../components/PlaylistVideoCards';

export default function ProfilePage() {
  const [videos, setVideos] = useState([]);
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [display, setDisplay] = useState('users');
  const { user } = useAuth();
  const getAllTheVideos = () => {
    getUserVideos(user.uid).then(setVideos);
  };

  const getAllTheVideosInPlaylist = () => {
    getAllInPlaylist(user.uid).then(setPlaylistVideos);
  };

  const handlePlaylistShow = () => {
    setDisplay('playlist');
  };

  const handleShowUserVid = () => {
    setDisplay('users');
  };

  useEffect(() => {
    getAllTheVideos();
    getAllTheVideosInPlaylist();
  }, []);

  const videoCount = videos.length;

  let displayComponent = null;
  if (display === 'users') {
    displayComponent = videos.map((video) => <UsersVideos key={video.video_id} videosObj={video} onUpdate={getAllTheVideos} formOnUpdate={getAllTheVideos} />);
  } else if (display === 'playlist') {
    displayComponent = playlistVideos.map((video) => <PlaylistVideoCard key={video.firebaseKey} videosObj={video} onUpdate={getAllTheVideosInPlaylist} />);
  }

  return (
    <>
      <title>Profile</title>
      { user ? (
        <>
          <div className="d-flex justify-content-" id="profile-card">
            <ProfileCard count={videoCount} />
          </div>
          <div className="d-flex flex-column">
            <div className="mb-2 d-flex justify-content-between w-50" id="profile-btn">
              <Button
                onClick={handleShowUserVid}
                style={{
                  border: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '23px',
                }}
              >
                Uploads
              </Button>
              <Button
                type="button"
                onClick={handlePlaylistShow}
                style={{
                  border: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '23px',
                }}
              >
                Playlist
              </Button>
              <VideoForm buttonText="Add a Video" bc="white" colorSet="black" fontSet="22px" onUpdate={getAllTheVideos} />
            </div>
            <div className="profile-vid">
              {displayComponent}
            </div>
          </div>
        </>
      ) : (
        <div className="signInWarn">
          <h3>You must be signed in to view your content.</h3>
        </div>
      )}
    </>
  );
}
