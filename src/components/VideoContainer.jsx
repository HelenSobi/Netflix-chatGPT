import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";

const VideoContainer = () => {

    const movies=useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const {id,title, overview}=movies[1];
    return (
        <>
        <section className="relative lg:h-screen text-white overflow-hidden">
            <VideoBg movieId={id}/>
            {/* Gradient overlay with adjusted z-index to layer above the video */}
            <div className="absolute inset-0 bg-gray-900/95 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l z-10"></div>
            {/* Content container with a higher z-index to be above the video */}
                <div className="relative z-40 flex justify-start flex-col p-4">
                <div className=" mt-20 md:mt-20 xl:mt-40 md:h-full w-full md:w-6/12 xl:w-5/12">
                    <h1 className=" self-start text-lg md:text-2xl font-semibold leading-tight mb-4">{title}</h1>
                    <p className=" self-start text-xs md:text-sm md:text-md text-gray-300 text-justify">{overview}</p>
                    
                    <div className="self-start  mt-4 md:mt-8 flex flex-wrap gap-4">
                    <a href="#" className="inline-block rounded bg-red-600 px-6 md:px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">Play</a>
                    <a href="#" className="inline-block rounded bg-white px-6 md:px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto">More Info</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default VideoContainer;