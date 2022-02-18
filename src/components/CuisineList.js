import CuisineListItem from "./CuisineListItem";

const CuisineList = (props) => {
  return (
    <div>
      {props.Cuisines.slice(0, 8).map((cusine) => (
        <CuisineListItem
          key={cusine.id}
          name={cusine.name}
          imageUrl={cusine.imageUrl}
        />
      ))}
    </div>
  );
};

export default CuisineList;
