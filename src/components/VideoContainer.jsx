import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";

const VideoContainer = () => {
    const movies=useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const {id,title, overview}=movies[0];
    //console.log(movies[0]);
    return (
        <>
        <VideoBg movieId={id} title={title} overview={overview}/>
        </>
    )
}

export default VideoContainer;