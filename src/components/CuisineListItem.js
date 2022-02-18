import "./CuisineListItem.css";
import { Fragment } from "react/cjs/react.production.min";
import React from "react";

const CuisineListItem = (props) => {
  const url = "http://63.142.251.101:3000/" + props.imageUrl;
  return (
    <div className="item">
      <img src={url} alt={props.name} id={props.id}></img>
      <span className="caption">{props.name}</span>
    </div>
  );
};

export default CuisineListItem;
