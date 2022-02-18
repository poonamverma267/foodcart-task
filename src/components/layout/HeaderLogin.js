import { useState } from 'react';


import classes from './HeaderLogin.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

 
  return (
      <>
      <button className={btnClasses} onClick={props.onClick}>
      
      <span>Become a chef</span>
    </button>
    <button className={btnClasses} onClick={props.onClick}>
      <span>Login</span>
     
    </button>
    </>
  );
};

export default HeaderCartButton;