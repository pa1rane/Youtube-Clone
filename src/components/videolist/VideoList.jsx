import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './VideoList.module.css';

const VideoList = ({ videos, onVideoClick, isCalledFromVideoPlayer }) => {
 
  return (
    <>
    <div className={styles.container} style={{display: isCalledFromVideoPlayer ? "block": "flex" }}>
      {videos.map((video) => (
        <Link
        className={styles.link}
        to={`/video/${video.postId}`} 
          key={video.postId}
          onClick={() => onVideoClick(video)}
        >
        <div className={styles.vidContainer} key={video.postId} onClick={() => onVideoClick(video)}>
          <img className={styles.thumbnail} src={video.submission.thumbnail} alt={video.creator.handle} />
          <div className={styles.vidContainer2}>
          <img className={styles.pic} src={video.creator.pic} alt={video.creator.handle} />
           <div className={styles.details}>
          <p className={styles.title}>{video.submission.title}</p>
          <p className={styles.username}>{`@${video.creator.handle}`}</p>
          </div>
          </div>
        </div>
        </Link>
        
      ))}
    </div>
    </>
  );
};

VideoList.defaultProps = {
  videos: [],
  onVideoClick: ()=>{},
  isCalledFromVideoPlayer: false
};
 
VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoClick: PropTypes.func,
  isCalledFromVideoPlayer: PropTypes.bool
};

export default VideoList;
