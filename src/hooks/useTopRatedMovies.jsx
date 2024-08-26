import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";
import { API_OPTIONS ,TOP_RATED_URL  } from "../constants/constants_api";

const useTopRatedMovies=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchNowPlayingMoview();
    },[]);

    const fetchNowPlayingMoview=async()=>{    
        const data = await fetch(TOP_RATED_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
}

export default useTopRatedMovies;

