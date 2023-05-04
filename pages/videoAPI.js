import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { getYTVideos } from '../api/videoData';
import VideoHome from '../components/VideoHome';

const VideoAPI = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getYTVideos().then((data) => {
      const videoArray = data[0];
      setVideos(videoArray);
    });
  }, []);

  // console.warn('VIDEOS: ', videos);
  return (
    <div className="d-flex flex-wrap gap-3 mt-5 ">
      {videos.map((item) => console.warn('VideoItem: ', item.video))}
      {videos.map((video) => <VideoHome key={v4()} id={video.videoId} title={video.title} thumbnail={video.thumbnails[0].url} />)}
      HELLO

    </div>
  );
};

export default VideoAPI;
