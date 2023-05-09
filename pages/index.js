/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import FilterComponent from '../components/FilterComponent';
import { getAllVideos } from '../api/videoData';
import VideoHome from '../components/VideoHome';
// import Sidebar from '../components/Sidebar';
import { filterCategories } from '../utils/data/categories';

function Home({ query, setQuery }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (query === '') {
      setQuery('Reactjs');
    }
    getAllVideos(query).then((data) => {
      const videoArray = data;
      console.warn('videoARRAY: ', videoArray);
      setVideos(videoArray);
    });
  }, [query]);

  console.warn('Videos: ', videos);
  return (

    <>
      <div className="d-flex">
        <div className="d-flex flex-column bg-warning gap-4 me-4 mt-40">
          {/* <Sidebar key={v4()} setQuery={setQuery} /> */}
        </div>
        <div className="text-center d-flex flex-column justify-content-center align-content-center">
          <div className="p-2 d-flex justify-content-around mt-3 mb-2 ">
            {filterCategories.map((category) => <FilterComponent key={v4()} category={category} setQuery={setQuery} />)}
          </div>
          <div className="d-flex flex-wrap gap-3">
            {videos.map((item) => <VideoHome key={v4()} id={item.videoId} title={item.title} thumbnail={item.video_thumbnail} avatar={item.user_photo} />)}
          </div>
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
