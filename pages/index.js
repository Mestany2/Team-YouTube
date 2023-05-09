/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import FilterComponent from '../components/FilterComponent';
import { getAllVideos } from '../api/videoData';
import VideoHome from '../components/VideoHome';
import { filterCategories } from '../utils/data/categories';
import SideBar from '../components/SideBar';

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
      <SideBar />
      <div className="filters">
        {filterCategories.map((category) => <FilterComponent key={v4()} category={category} setQuery={setQuery} />)}
      </div>
      <div className="video-inside">
        <div className="video-container">
          {videos.map((item) => <VideoHome key={v4()} id={item.video_id} title={item.title} thumbnail={item.video_thumbnail} avatar={item.user_photo} />)}

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
