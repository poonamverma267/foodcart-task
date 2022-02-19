import { Fragment, useState } from "react";
import classes from "./Header.module.css";
import logo from "../assets/images/logo.svg";

const Header = (props) => {
  // const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  return (
    <Fragment>
      <header className={classes.header}>
        <section className={classes.firstsection}>
          <span className={classes.para}>
            Free delivery on all items over $25
          </span>
        </section>
        <section className={classes.secondsection}>
          <span className={classes.spanone}>
            <img src={logo} alt="logo" height="40rem" width="25rem" />
          </span>
          <span className={classes.spantwo}></span>
          <span>
            <span>
              <button className={classes.btn1} onClick={props.onClick}>
                Become a Chef
              </button>
            </span>
            <span>
              <button className={classes.btn2} onClick={props.onClick}>
                Login
              </button>
            </span>
          </span>
        </section>
      </header>
    </Fragment>
  );
};

export default Header;
