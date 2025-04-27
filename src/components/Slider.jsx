import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typewriter } from 'react-simple-typewriter';
import bannerImage1 from '../assets/banner1.jpg';
import bannerImage2 from '../assets/banner2.jpg';
import bannerImage3 from '../assets/banner3.jpg';

const Slider = () => {
  return (
    <div className="banner-slider relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img className="w-full h-56 object-cover md:h-96" src={bannerImage1} alt="Banner 1" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center">
              <Typewriter
                words={['Welcome to Library Management System']}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="text-2xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center">
              Explore the world of literature.
            </p>
          </div>
        </div>

        <div>
          <img className="w-full h-56 object-cover md:h-96" src={bannerImage2} alt="Banner 2" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center">Stay Updated</h1>
            <p className="text-2xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center">Find the latest books and authors.</p>
          </div>
        </div>

        <div>
          <img className="w-full h-56 object-cover md:h-96" src={bannerImage3} alt="Banner 3" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center">Your Next Read</h1>
            <p className="text-2xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-red-700 via-blue-700  to-green-500 
                   animate-gradient drop-shadow-md hover:drop-shadow-xl transition-all duration-500
                   text-center">Find your perfect book today.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
