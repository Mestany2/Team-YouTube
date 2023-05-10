/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import FilterComponent from '../components/FilterComponent';
import { getAllVideos } from '../api/videoData';
import VideoHome from '../components/VideoHome';
import SideBar from '../components/SideBar';

const filterCategories = ['ALL', 'Coding', 'Music', 'Boxing', '3D Printing', 'Gym', 'Gaming', 'Guitar'];
function Home({ query, setQuery }) {
  const [videos, setVideos] = useState([]);

  const unfilteredVideos = () => {
    getAllVideos().then((data) => {
      const videoArray = data;
      setVideos(videoArray);
    });
  };

  useEffect(() => {
    getAllVideos().then((data) => {
      const videoArray = data;
      setVideos(videoArray);
    });
  }, []);

  const filteredVids = videos.filter((video) => video.title.toLowerCase().includes(query.toLowerCase()) || video.category.toLowerCase().includes(query.toLocaleLowerCase()));

  return (

    <>

      <SideBar />
      <div className="filters">
        {filterCategories.map((category) => <FilterComponent key={v4()} category={category} setQuery={setQuery} unfilteredVideos={unfilteredVideos} />)}
      </div>
      <div className="video-inside">
        <div className="video-container">
          {filteredVids?.map((item) => <VideoHome key={v4()} id={item?.video_id} title={item?.title} thumbnail={item?.video_thumbnail} avatar={item?.user_photo} firebaseKey={item?.firebaseKey} />)}

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
