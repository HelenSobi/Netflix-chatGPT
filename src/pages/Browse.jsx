
import NavBarHeader from "../components/NavBarHeader";
import VideoContainer from "../components/VideoContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import NowPlayingSlider from "../components/NowPlayingSlider";

const Browse = () => {
    useNowPlayingMovies();
    return (
        <>
        <NavBarHeader/>
        <VideoContainer/>
        <NowPlayingSlider/>
        </>
    )
}

export default Browse;