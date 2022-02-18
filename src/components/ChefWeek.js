import classes from "./ChefWeek.module.css";

const ChefWeek = (props) => {
  const chef = props.Chef[0];
  const url = "http://63.142.251.101:3000/" + chef.chefprofile;
  return (
    <div className={classes.backfill}>
      <p className={classes.chefTitle}>Chef of the Week</p>

      {/* <p>{chef.chefid}</p> */}
      <div className={classes.row}>
        <div className={classes.column}>
          <img className={classes.chefImage} src={url}></img>
        </div>
        <div className={[classes.column, classes.pad].join(" ")}>
          <span>
            <span className={classes.textLeft}>Chef {chef.chefname}</span>
            <span>
              {chef.totalRating}({chef.reviewCnt} reviews)
            </span>
          </span>
          <p>{chef.aboutChef}</p>
        </div>
      </div>
      {/* <p>{chef.chef_cusinie}</p> */}
    </div>
  );
};

export default ChefWeek;
