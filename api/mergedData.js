import { deleteVideo, deleteVideoFromPlaylist, getVideoFromAllPlaylist } from './videoData';

const deleteVideoAndFromPlaylist = (originalFirebaseKey) => new Promise((resolve, reject) => {
  getVideoFromAllPlaylist(originalFirebaseKey).then((videosArray) => {
    console.warn(videosArray);
    const deleteVidPlaylistPromises = videosArray.map((video) => deleteVideoFromPlaylist(video.actualKey));
    Promise.all(deleteVidPlaylistPromises).then(() => {
      deleteVideo(originalFirebaseKey).then(resolve);
    });
  }).catch((error) => reject(error));
});

export default deleteVideoAndFromPlaylist;
