import React from 'react'
import VideoCard from './VideoCard'
const list = ['v1', 'v2', 'v2', 'v2', 'v2', 'v2', 'v2'];

const VideoContainer = () => {
    return (
        <div class="flex"> {list.map((data) => <VideoCard name={data} key={data} />)}</div>
    )
}

export default VideoContainer