import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import FilterComponent from '../components/FilterComponent';
import { getYTVideos } from '../api/videoData';
import VideoHome from '../components/VideoHome';

function Home({ query, setQuery }) {
  const categories = ['Cats', 'kids', 'mandolin', 'guitar'];
  const [videos, setVideos] = useState([]);
  console.warn('QUERY: ', query);

  useEffect(() => {
    getYTVideos(query).then((data) => {
      const videoArray = data[0];
      setVideos(videoArray);
    });
  }, [query]);

  return (
    <>
      <div className="w-80 mx-auto">
        <div className="d-flex gap-5 justfy-content-center">
          {categories.map((category) => <FilterComponent key={v4()} category={category} setQuery={setQuery} />)}
        </div>
        <div className="d-flex flex-wrap">
          {videos.map((item) => <VideoHome key={v4()} id={item.video.videoId} title={item.video.title} thumbnail={item.video.thumbnails[0].url} avatar={item.video.author.avatar[0].url} />)}
        </div>
      </div>
    </>

  );
}

export default Home;

Home.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};
Home.defaultProps = {
  query: 'coding',
  setQuery: () => {},
};
