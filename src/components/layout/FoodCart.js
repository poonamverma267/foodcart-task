import React from 'react';

import classes from './FoodCart.module.css';
import CuisineListItem from './CuisineListItem';

const FoodCart = (props) => {
  return (
    <ul>
      {props.cuisineList.map((cusine) => 
       (
         <CuisineListItem
         key={cusine.id}
         name={cusine.name}
         imageUrl={cusine.imageUrl}
          />
       ))
    }
    </ul>
    // <ul>{props.popularWeek}</ul>
    // <ul>{props.chefWeek}</ul>
  );
};

export default FoodCart;
