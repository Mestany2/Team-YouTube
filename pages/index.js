/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import FilterComponent from '../components/FilterComponent';
import { getAllVideos } from '../api/videoData';
import VideoHome from '../components/VideoHome';

function Home({ query, setQuery }) {
  const categories = ['Reatjs', 'Javascript', 'Mandolin', 'Guitar', 'CSS', 'Fishing'];
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (query === '') {
      setQuery('Reactjs');
    }
    getAllVideos().then((data) => {
      const videoArray = data;
      setVideos(videoArray);
    });
  }, []);

  return (

    <>
      <div className=" bg-info text-center d-flex flex-column justify-content-center align-content-center">
        <div className="p-2 d-flex justify-content-between ">
          {categories.map((category) => <FilterComponent key={v4()} category={category} setQuery={setQuery} />)}
        </div>
        <div className="d-flex flex-wrap gap-4">
          {/* {videos.map((item) => item.type === 'video' && console.warn('ITEM: ', item))} */}
          {videos.map((item) => item.type === 'video' && <VideoHome key={v4()} id={item.video.videoId} title={item.video.title} thumbnail={item.video.thumbnails[0].url} avatar={item.video.author.avatar[0].url} views={item.video.stats.views} channel={item.video.author.title} publishedTime={item.video.publishedTimeText} />)}
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
