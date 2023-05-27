import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import styles from "/App.module.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import VideoList from "./components/videolist/VideoList";
import VideoPlayer from "./components/videoplayer/VideoPlayer";
import Pagination from "./components/pagination/Pagination";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchVideos(0); // Start with page 0
  }, []);

  const fetchVideos = async (page) => {
    try {
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${page}`
      );
      setVideos(response.data.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };
console.log(selectedVideo)
  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Sidebar />
        <div className={styles.videoListWrapper}>
            <Routes>
              <Route
              exact
                path="/"
                element={
                  <VideoList videos={videos} onVideoClick={handleVideoClick}  />
                }
              ></Route>
              <Route
                path="/video/:id"
                element={<VideoPlayer video={selectedVideo} videos={videos} />}
              ></Route>
             
            </Routes>
        </div>
      </div>
      <Pagination onPageChange={fetchVideos} />
      </React.Fragment>
  );
};

export default App;
