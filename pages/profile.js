/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileData';
import { getUserVideos } from '../api/videoData';
import { useAuth } from '../utils/context/authContext';
import UsersVideos from '../components/VideoProfile';
import VideoForm from '../components/forms/VideoForm';

export default function ProfilePage() {
  const [videos, setVideos] = useState([]);
  const { user } = useAuth();
  const getAllTheVideos = () => {
    getUserVideos(user.uid).then(setVideos);
  };

  useEffect(() => {
    getAllTheVideos();
    console.warn(`user photo url ${user.photoURL}`);
  }, []);

  const videoCount = videos.length;

  return (
    <>
      <div className="d-flex justify-content-">
        <ProfileCard count={videoCount} />
      </div>
      <div className="d-flex flex-column">
        <div className="mb-2 d-flex justify-content-between w-50">
          <h4 style={{ fontWeight: '500' }}>Uploads</h4>
          <VideoForm buttonText="Add a Video" bc="white" colorSet="black" fontSet="22px" onUpdate={getAllTheVideos} />
        </div>
        {videos.map((video) => <UsersVideos key={video.video_id} videosObj={video} onUpdate={getAllTheVideos} formOnUpdate={getAllTheVideos} />)}
      </div>
    </>
  );
}
