import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addNowPlayMovies } from "../store/movieSlice";
import { API_OPTIONS ,NOW_PLAYING_URL  } from "../constants/constants_api";

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchNowPlayingMoview();
    },[]);

    const fetchNowPlayingMoview=async()=>{    
        const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayMovies(json.results));
    }
}

export default useNowPlayingMovies;

