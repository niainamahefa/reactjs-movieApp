import React from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import Video from "./components/Video";
import axios from "axios";
import {Container} from "@material-ui/core";

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=en&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=e16cae4936aa4429f93e3ae6b177e2cf"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {movieList:{}, currentMovie:{}}
    }
    componentWillMount() {
        this.initMovies()
    }
    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
            .then(function (response) {
                this.setState({movieList: response.data.results.slice(1, 11), currentMovie: response.data.results[0]}, function () {
                    this.applyVideoToCurrentMovie();
                });

            }.bind(this));
    }
    applyVideoToCurrentMovie() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`)
            .then(function (response) {
                // Récupération des vidéos sur youtube
                const youtubeKey = response.data.videos.results[0].key;
                let newCurrentMovieState = this.state.currentMovie;
                newCurrentMovieState.videoId = youtubeKey;
                this.setState({currentMovie: newCurrentMovieState});
                // console.log("New current",newCurrentMovieState)

            }.bind(this));
    }

    render() {
        // Check if movieList exist
        const renderVideoList = () => {
            if(this.state.movieList.length >= 5) {
                return   <VideoList movieList={this.state.movieList}/>
            }
        }

        return (
            <Container>
                <SearchBar />
                <Video videoId={this.state.currentMovie.videoId} />
                <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                {renderVideoList()}
            </Container>
        )
    }
}

export default App