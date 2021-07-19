import React from 'react'
import Grid from "@material-ui/core/Grid";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"

const VideoListItem = (props) => {
    const movie = props.movie
    return (
        <Grid item  xs={12} sm={6} md={12}>
            <Card style={{ backgroundColor: '#000000' }} variant="outlined" onClick={handleOnClick}>
                <Paper>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Typography style={{ color: '#919090' }}>
                                    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} width="70%"/>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography gutterBottom variant="h6" component="h2"  style={{ color: '#5cb85c' }}>
                                    {movie.title}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="small"  style={{ color: '#6f6f6f' }}>
                                    <small>{movie.release_date}</small>
                                </Typography>
                                <Typography gutterBottom style={{ color: '#928f8f', marginTop: '15px' }}>
                                    {movie.overview}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Paper>
            </Card>
        </Grid>
    )

    function handleOnClick() {
        props.callback(movie);
    }
}
export default VideoListItem