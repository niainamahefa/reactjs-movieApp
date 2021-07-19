import React from 'react'

const YOUTUBE_BASE_URL = "https://www.youtube.com/embed/"

const Video = ({videoId}) => {
    return (
        <div>
            <iframe src={`${YOUTUBE_BASE_URL}${videoId}`} frameborder="0" />
        </div>
    )
}
export default Video