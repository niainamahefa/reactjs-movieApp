import React from 'react'
import VideoListItem from "../components/VideoListItem";
import Grid from "@material-ui/core/Grid";

const VideoList = ({movieList}) => {
    return (
            <Grid container  spacing={2}>
                {
                    // Boucler sur les tableaux avec la fonction map
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie}/>
                    })
                }
            </Grid>
    )
}

export default VideoList