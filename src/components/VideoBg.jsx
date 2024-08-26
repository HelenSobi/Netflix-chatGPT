import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from "react-redux";

const VideoBg = ({ movieId}) => {
  useMovieTrailer(movieId);
  const trailerKey = useSelector(store => store.movies?.movieTrailerVideo?.key);
  if (!trailerKey) return null;

  return (
      <div className="absolute inset-0 aspect-video z-30">
        {/* Wrapper for the video background */}
        <iframe 
          className="block object-cover object-center h-[300px] w-full md:w-full md:h-full bg-transparent opacity-90" 
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}`} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          frameBorder="0" 
          allowFullScreen 
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        {/* to get looping work: Add video ID another time as playlist value! */}
        {/* Overlay that darkens the video background  
        bug ******* check for small screen*/}
        <div className="absolute inset-0 bg-black opacity-40 md:opacity-70"></div>
      </div>
  );
}

export default VideoBg;
