import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
// import FilterComponent from '../components/FilterComponent';
import { getYTVideos } from '../api/videoData';
import VideoHome from '../components/VideoHome';

function Home({ query }) {
// const categories = ['Cats', 'Code', 'Music', 'Recently Uploaded'];
  const [videos, setVideos] = useState([]);
  // const q = 'coding';
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

Home.propTypes = {
  query: PropTypes.string,

};

Home.defaultProps = {
  query: 'coding',
};

export default Home;
