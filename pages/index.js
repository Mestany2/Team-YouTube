import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
// import FilterComponent from '../components/FilterComponent';
import { getYTVideos } from '../api/videoData';
import VideoHome from '../components/VideoHome';

function Home() {
// const categories = ['Cats', 'Code', 'Music', 'Recently Uploaded'];
  const [videos, setVideos] = useState([]);
  const query = 'coding';
  useEffect(() => {
    getYTVideos(query).then((data) => {
      const videoArray = data[0];
      setVideos(videoArray);
    });
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3 ">
      {/* {categories.map((category) => <FilterComponent categories={category} />)} */}
      {videos.map((item) => <VideoHome key={v4()} id={item.video.videoId} title={item.video.title} thumbnail={item.video.thumbnails[0].url} avatar={item.video.author.avatar[0].url} />)}

    </div>
  );
}

export default Home;
