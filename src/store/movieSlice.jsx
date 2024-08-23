import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailerVideo:null,
    },
    reducers:{
        addNowPlayMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailerVideo=action.payload;
        },
    },
});

export const { addNowPlayMovies , addMovieTrailer }=movieSlice.actions;
export default movieSlice.reducer;