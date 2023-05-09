const dbUrl = 'https://team-851f6-default-rtdb.firebaseio.com';

const getAllVideos = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/videos.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getFilteredVideos = (query) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/videos.json/?orderBy="category"&equalTo="${query}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleVideo = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/videos/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getUserVideos = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/videos.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const uploadNewVideo = (payload) => new Promise((resolve, reject) => {
  fetch('https://team-851f6-default-rtdb.firebaseio.com/videos.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVideo = (payload) => new Promise((resolve, reject) => {
  fetch(`https://team-851f6-default-rtdb.firebaseio.com/videos/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteVideo = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/videos/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllVideos,
  getSingleVideo,
  getUserVideos,
  uploadNewVideo,
  updateVideo,
  deleteVideo,
  getFilteredVideos,
  // getYTVideos,
  // getSingleYTVideo,
};
