import Slider from "react-slick";

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 5,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
    return (
        <>

    
    {/* <button type="button" data-role="none" className="slick-arrow slick-prev" style={{display: "block"}}> Previous</button> */}
    {/* <div style={{ margin: 20 }}>
        <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => slider?.current?.slickNext()}
        >
          Next
        </button>
      </div> */}
    <div className="p-8">
    <Slider {...settings}>
      <div className="bg-orange-800">
        <h3 className="text-black">1</h3>
      </div>
      <div className="bg-red-800">
        <h3 className="text-black">2</h3>
      </div>
      <div className="bg-indigo-800">
      <h3 className="text-black">3</h3>
      </div>
      <div className="bg-orange-800">
        <h3 className="text-black">4</h3>
      </div>
      <div className="bg-orange-800">
        <h3 className="text-black">5</h3>
      </div>
      <div className="bg-orange-800">
        <h3 className="text-black">6</h3>
      </div>
    </Slider>
    </div>
   
{/* <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4" autoPlay muted loop></video>
    </div>
    <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-6xl">full Hero Video</h1>
        <h3 className="font-light text-3xl">with TailwindCSS</h3>
    </div>
</section> */}




        </>
    )
}

export default Hero;