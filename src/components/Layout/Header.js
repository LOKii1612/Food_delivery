// import { Fragment } from 'react';

// import HeaderCartButton from './HeaderCartButton';
// import mealsImage from '../../assets/foo.jpg';
// import classes from './Header.module.css';


// const Header = (props) => {
//   return (
//     <Fragment>
//       <header className={classes.header}>
//         <h1>ReactMeals</h1>
//         <HeaderCartButton onClick={props.onShowCart} />
//       </header>
//       <div className={classes['main-image']}>
//         <img src={mealsImage} alt='A table full of delicious food!' />
//       </div>
//     </Fragment>
//   );
// };

// export default Header;

import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/foo.jpg';
import logo from '../../assets/foooo.png'; // Import the logo
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logoContainer}>
          <img src={logo} alt='ReactMeals Logo' className={classes.logo} />
          <h1>Yum<span style={{ fontWeight: 'bold' }}>Eats</span></h1>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
