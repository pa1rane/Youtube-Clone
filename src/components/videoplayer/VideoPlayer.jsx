import styles from "./VideoPlayer.module.css";
import ReactPlayer from "react-player";
import React from "react";
import VideoList from "../videolist/VideoList";

const VideoPlayer = ({ video, videos }) => {
  
  
  return (
    <>
      {video && (
        <div
         style={{display:'flex',
          justifyContent:'space-between',
           width: '90%'}}>
          <div 
          style={{display:'flex',
           flexDirection:'column',
            width:'75%',
            position:"sticky",
            top:"4rem",
            height: "500px",
            background:"white"
            }}>
            <ReactPlayer width='100%' url={video.submission.mediaUrl} controls />
            <h3 style={{padding:"0.5rem 0"}}>{video.submission.title}</h3>
            <p style={{background:"lightGrey", padding:"1rem"}}>{video.submission.description}</p>

          </div>
          <div style={{overflow:"auto"}}>
          <VideoList videos={videos} isCalledFromVideoPlayer />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
