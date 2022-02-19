import React, { useEffect } from "react";

import Glide from "@glidejs/glide";
import PopularDishItem from "./PopularDishItem";
// // Required Core Stylesheet
import "/node_modules/@glidejs/glide/dist/css/glide.core.min.css";
// // Optional Theme Stylesheet
import "/node_modules/@glidejs/glide/dist/css/glide.theme.min.css";
import "./PopularDish.css";

const sliderConfiguration = {
  gap: 20,
  perView: 3,
  startAt: 0,
  type: "slider",
};

const PopularDish = (props) => {
  const dishList = props.PopFood.map((food) => (
    <PopularDishItem key={food.chefid} foodChef={food} />
  ));
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
          <ul className="glide__slides">{dishList}</ul>
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

export default PopularDish;
