import React from 'react'
import Grid from "@material-ui/core/Grid";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"

const VideoListItem = ({movie}) => {
    console.log(movie)
    return (
        <Grid item  xs={12} sm={6} md={6}>
            <Card style={{ backgroundColor: '#000000' }} variant="outlined">
                <Paper>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Typography style={{ color: '#919090' }}>
                                    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} width="50%"/>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography gutterBottom variant="h6" component="h2"  style={{ color: '#5cb85c' }}>
                                    {movie.title}
                                </Typography>
                                <Typography gutterBottom style={{ color: '#928f8f' }}>
                                    {movie.overview}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Paper>
            </Card>
        </Grid>
    )
}
export default VideoListItem