module.exports = {
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
  images: {
    domains: ['www.youtube.com', 'i3.ytimg.com', 'lh3.googleusercontent.com', 'i.ytimg.com', 'yt3.ggpht.com', 'img.youtube.com'],
  },
};
