//import "./Carousel.css";
const CarouselItem = (props) => {
  const url =
    "http://63.142.251.101:3000/" + props.foodChef.dish_masters[0].dishImage;
  return (
    <li className="glide__slide slider">
      <img
        src={url}
        alt={props.foodChef.chefname}
        id={props.foodChef.chefid}
        width="300px"
        height="200px"
      />
      {/* {props.foodChef.totalRating}({props.foodChef.reviewCnt} reviews) */}
    </li>
  );
};

export default CarouselItem;
