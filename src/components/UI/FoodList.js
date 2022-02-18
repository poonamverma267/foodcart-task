import React from 'react';
import FoodCart from '../layout/FoodCart';


import classes from './FoodList.module.css';

const FoodList = (props) => {
  return (
    <ul>
     <FoodCart
        cuisineList={props.Cusines.cuisine_list}
        popularWeek={props.Cusines.popularweek}
          chefWeek={props.Cusines.chefweek}
        /> 
    </ul>
  );
};

export default FoodList;