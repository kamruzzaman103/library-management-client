// src/components/Slider.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Slider = () => {
  return (
    <div className="w-full h-96">
      <Carousel>
        <div>
          <img src="https://via.placeholder.com/1200x400" alt="Slide 1" />
          <div className="legend">
            <h2 className="text-white text-4xl font-bold">Discover New Books</h2>
            <p className="text-white text-xl">Explore the world of literature.</p>
          </div>
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x400" alt="Slide 2" />
          <div className="legend">
            <h2 className="text-white text-4xl font-bold">Stay Updated</h2>
            <p className="text-white text-xl">Find the latest books and authors.</p>
          </div>
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x400" alt="Slide 3" />
          <div className="legend">
            <h2 className="text-white text-4xl font-bold">Your Next Read</h2>
            <p className="text-white text-xl">Find your perfect book today.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
