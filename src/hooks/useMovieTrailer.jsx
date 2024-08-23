import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../store/movieSlice";
import { API_OPTIONS, MOVIE_TRAILER  } from "../constants/constants_api";

const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
      fetchMovieVideo();
    },[]);
  
  const fetchMovieVideo=async()=>{  
      const data = await fetch(`${MOVIE_TRAILER}${movieId}/videos?language=en-US`, API_OPTIONS);
      const json = await data.json();
      const trailerData = json.results.filter((video)=>video.type==="Trailer");
      const trailer=trailerData.length===0 ? json.results :trailerData[0];
      //if trailer is not there it will take the first data
      dispatch(addMovieTrailer(trailer));
      
  }
}

export default useMovieTrailer;

