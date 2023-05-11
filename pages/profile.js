/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ProfileCard from '../components/ProfileData';
import { getUserVideos, getAllInPlaylist } from '../api/videoData';
import { useAuth } from '../utils/context/authContext';
import UsersVideos from '../components/VideoProfile';
import VideoForm from '../components/forms/VideoForm';
import SideBar from '../components/SideBar';

export default function ProfilePage() {
  const [videos, setVideos] = useState([]);
  const [, setPlaylistVideos] = useState([]);
  const { user } = useAuth();
  const getAllTheVideos = () => {
    getUserVideos(user.uid).then(setVideos);
  };

  const getAllTheVideosInPlaylist = () => {
    getAllInPlaylist(user.uid).then(setPlaylistVideos);
  };

  useEffect(() => {
    getAllTheVideos();
    getAllTheVideosInPlaylist();
  }, []);

  const videoCount = videos.length;

  return (
    <>
      <SideBar />
      <div className="d-flex justify-content-" id="profile-card">
        <ProfileCard count={videoCount} />
      </div>
      <div className="d-flex flex-column">
        <div className="mb-2 d-flex justify-content-between w-50" id="profile-btn">
          <h4 style={{ fontWeight: '500' }}>Uploads</h4>
          <Button
            type="button"
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
          {videos.map((video) => <UsersVideos key={video.video_id} videosObj={video} onUpdate={getAllTheVideos} formOnUpdate={getAllTheVideos} />)}
        </div>
      </div>
    </>
  );
}
