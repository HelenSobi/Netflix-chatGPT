import Slider from "react-slick";
import {useSelector} from 'react-redux';
import SliderCard from './SliderCard';
import settings from "../constants/constants_slider";

const PopularMoviesSlider = () => {
    const movies=useSelector(store => store.movies?.popularMovies);
    if (!movies || !Array.isArray(movies) || movies.length === 0) {
        console.warn("No movies data available to display."); // Debugging warning
        return null;
    }

    return (
        <>
        <div className="py-4 px-8">
        <h1 className="text-black text-lg md:text-2xl font-semibold leading-tight mb-4">Popular Movies</h1>
        <Slider {...settings}>
            {movies?.map((card)=>(
                <SliderCard key={card.id} imageId={card.poster_path} title={card.title} rel_date={card.release_date}/>
            ))}
        </Slider>
        </div>
        </>
    )
}

export default PopularMoviesSlider;