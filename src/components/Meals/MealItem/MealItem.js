import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image,
      
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
// import React from 'react';
// import classes from './MealItem.module.css';

// const MealItem = ({ id, name, description, price }) => {
//   return (
//     <div className={classes.mealItem}>
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <div className={classes.price}>${price.toFixed(2)}</div>
//     </div>
//   );
// };

// export default MealItem;

