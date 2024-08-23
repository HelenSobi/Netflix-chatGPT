import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from "react-redux";

const VideoBg = ({movieId, title, overview}) => {
  //fetch trailer video & update the store with trailer video
  useMovieTrailer(movieId);
  //get trailerkey from store
  const trailerKey = useSelector(store=>store.movies?.movieTrailerVideo?.key);
  if(!trailerKey) return;
  

    return (
        <>
       {/* https://www.youtube.com/embed/${trailerKey}?si=ajoY8T7G-pq_4vwI */}
        <div className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0 aspect-video">
        <iframe className="object-cover object-center w-full h-full bg-transparent opacity-90" src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-4/12 mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-semibold leading-tight mb-4">{title}</h1>
          <p className="text-lg md:text-lg text-gray-300 mb-8">{overview}</p>
          <button className="transition-all duration-500 bg-red-700 hover:bg-red-900 hover:text-white py-2 px-6 rounded  text-white mr-8">Play</button>
          <button className="transition-all duration-500 bg-zinc-500 hover:bg-zinc-900 hover:text-white py-2 px-6 rounded  text-white">More Info</button>
        </div>
    </div>
      </div>  
        </>
    )
}

export default VideoBg;