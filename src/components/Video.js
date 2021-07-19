import React from 'react'

const YOUTUBE_BASE_URL = "https://www.youtube.com/embed/"

const Video = ({videoId}) => {
    return (
            <iframe src={`${YOUTUBE_BASE_URL}${videoId}`}  />
    )
}
export default Video