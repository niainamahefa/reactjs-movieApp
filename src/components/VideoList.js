import React from 'react'
import VideoListItem from "../components/VideoListItem";
import Grid from "@material-ui/core/Grid";

const VideoList = (props) => {
    const {movieList} = props;
    return (
            <Grid fullWidth  spacing={2}>
                {
                    // Boucler sur les tableaux avec la fonction map
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallback}/>
                    })
                }
            </Grid>
    )

    function receiveCallback(movie) {
        props.callback(movie);
    }
}

export default VideoList