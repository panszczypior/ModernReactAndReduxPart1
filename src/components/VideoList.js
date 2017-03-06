import React, { PropTypes } from 'react'
import VideoListItem from './VideoListItem';

const VideoList = (props) => {

  const videos = props.videos.map( video => {
    return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect}/>;
  })

  return (
    <ul className="col-md-4 list-group">
      {videos}
    </ul>
  )
}

export default VideoList
