import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
// import FilterComponent from '../components/FilterComponent';
import { getYTVideos } from '../api/videoData';
import VideoHome from '../components/VideoHome';

function Home() {
// const categories = ['Cats', 'Code', 'Music', 'Recently Uploaded'];
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    getYTVideos().then((data) => setVideos(data));
  };
  useEffect(() => {
    getVideos();
  }, []);
  console.warn('VIDEOS: ', videos);

  return (
    <div className="text-center d-flex flex-column justify-content-center align-content-center">
      {/* {categories.map((category) => <FilterComponent categories={category} />)} */}
      {videos.map((video) => {
        console.warn(video.id);
        return (
          <VideoHome key={v4()} id={video.id} snippet={video.snippet} thumbnails={video.snippet.thumbnails} />
        );
      })}
    </div>
  );
}

export default Home;
