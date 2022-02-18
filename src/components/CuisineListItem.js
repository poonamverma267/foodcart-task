import './CuisineListItem.css';

const CuisineListItem = (props) => {
  const url = "http://63.142.251.101:3000/" + props.imageUrl;
    return (
      
          <span>
          <img src={url} alt={props.name} id={props.id}></img>
          {props.name}
          </span>
      
    );
  };

export default CuisineListItem;