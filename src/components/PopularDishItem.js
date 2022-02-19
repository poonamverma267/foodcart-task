const PopularDishItem = (props) => {
  const url =
    "http://63.142.251.101:3000/" + props.foodChef.dish_masters[0].dishImage;
  const dish = props.foodChef.dish_masters[0].dishname;
  return (
    <li className="glide__slide slider">
      <img
        src={url}
        alt={props.foodChef.chefname}
        id={props.foodChef.chefid}
        width="300px"
        height="200px"
      />
      <div className="dishContent">
        <p className="dishTitle">{dish}</p>
        <p className="dishChef">{props.foodChef.chefname}</p>
        <p className="dishRating">
          <span className="w3-badge w3-red">{props.foodChef.totalRating}</span>{" "}
          ({props.foodChef.reviewCnt} reviews)
        </p>
      </div>
    </li>
  );
};

export default PopularDishItem;
