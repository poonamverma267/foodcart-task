import { Fragment } from 'react';

import HeaderLogin from './HeaderLogin';


import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <p className={classes.para}>Free delivery on all items over $25
        
        
        </p>
        </header>
        
        <div className={classes.headertwo}> 
        <h4>Logo</h4>
        <HeaderLogin></HeaderLogin>
       
         </div>
    </Fragment>
  );
};

export default Header;