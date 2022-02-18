import React, { useEffect } from "react";
import "./Carousel.css";
import Glide from "@glidejs/glide";
import CarouselItem from "./CarouselItem";
// // Required Core Stylesheet
import "/node_modules/@glidejs/glide/dist/css/glide.core.min.css";
// // Optional Theme Stylesheet
import "/node_modules/@glidejs/glide/dist/css/glide.theme.min.css";

const sliderConfiguration = {
  gap: 20,
  perView: 3,
  startAt: 0,
  type: "slider",
};

const Carousel = (props) => {
  const slider = new Glide(".glide", sliderConfiguration);

  useEffect(() => {
    return () => slider.mount();
  }, [slider]);

  return (
    <>
      {" "}
      <div>
        <span className="left titleText">Popular Weekly Food</span>
      </div>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {props.PopFood.map((food) => (
              <CarouselItem key={food.chefid} foodChef={food} />
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--prev"
            data-glide-dir="<"
          >
            &#8592;
          </button>
          <button
            className="glide__arrow glide__arrow--next"
            data-glide-dir=">"
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
