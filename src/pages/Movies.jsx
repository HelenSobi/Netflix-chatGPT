import NowPlayingSlider from "../components/NowPlayingSlider";
import PopularMoviesSlider from "../components/PopularMoviesSlider";
import TopRatedMoviesSlider from "../components/TopRatedMoviesSlider";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useLocation } from "react-router-dom";

const Movies=()=>{
    const location = useLocation();
    usePopularMovies();
    useTopRatedMovies();
    const isMoviesPage = location.pathname === '/movies'; 

    return (        
        <>
        <div className={`${isMoviesPage ? "pt-16" : "-mt-40"}`}>
        <NowPlayingSlider/>
        <PopularMoviesSlider/>
        <TopRatedMoviesSlider/>
        </div>
        </>
    )
}
export default Movies;
