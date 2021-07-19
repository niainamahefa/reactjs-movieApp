import React from 'react'

const VideoDetail = ({title, description}) => {
    return (
        <div>
            <h1 className="card-title">{title}</h1>
            <p className="card-text">{description}</p>
        </div>
    )
}
export default VideoDetail