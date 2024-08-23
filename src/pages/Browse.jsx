
import NavBarHeader from "../components/NavBarHeader";
import VideoContainer from "../components/VideoContainer";
import useNowPlayingMoviesApi from "../hooks/useNowPlayingMoviesApi";
import NowPlaying from '../components/NowPlaying';

const Browse = () => {
    useNowPlayingMoviesApi();
    return (
        <>
        <NavBarHeader/>
        <VideoContainer/>
        <NowPlaying/>
        </>
    )
}

export default Browse;