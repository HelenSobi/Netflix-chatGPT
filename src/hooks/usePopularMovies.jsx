import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";
import { API_OPTIONS ,POPULAR_URL  } from "../constants/constants_api";

const usePopularMovies=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchNowPlayingMoview();
    },[]);

    const fetchNowPlayingMoview=async()=>{    
        const data = await fetch(POPULAR_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
}

export default usePopularMovies;

