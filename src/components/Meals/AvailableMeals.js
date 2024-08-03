import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useHref } from 'react-router-dom';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Nigiri (a slice of fish atop a small mound of rice) to elaborate rolls (maki) wrapped in seaweed (nori) and filled with multiple ingredients.',
    price: 229,
    image: "../../assets/images/sus.jpg",
  },
  {
    id: 'm2',
    name: 'Mini Biryani',
    description: 'Biryani is a flavorful and aromatic rice dish that originated in the Indian subcontinent. ',
    price: 165,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 120,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 189,
  },
  {
    id: 'm5',
    name: 'Chicken Tikka Masala',
    description: 'Grilled chunks of chicken cooked in a creamy tomato-based sauce with spices.',
    price: 159,
  },
  {
    id: 'm6',
    name: 'Paneer Butter Masala',
    description: 'Cubes of paneer (Indian cottage cheese) cooked in a rich and creamy tomato-based gravy.',
    price: 199,
  },
  {
    id: 'm7',
    name: 'Palak Paneer',
    description: 'Paneer cubes cooked with spinach and spices, offering a flavorful and nutritious dish.',
    price: 185,
  },
  {
    id: 'm8',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry served with deep-fried bread known as bhature.',
    price: 110,
  },
  {
    id: 'm9',
    name: 'Rogan Josh',
    description: 'A rich and aromatic lamb curry cooked with a blend of spices.',
    price: 170,
  },
  {
    id: 'm10',
    name: 'Gulab Jamun',
    description: 'Deep-fried dough balls soaked in a sweet, rose-flavored syrup.',
    price: 35,
  },
  {
    id: 'm11',
    name: 'Ras Malai',
    description: 'Creamy and sweet dessert made from cheese dumplings soaked in a flavored milk sauce.',
    price: 25,
  },
  {
    id: 'm12',
    name: 'Jalebi',
    description: 'Crispy and sweet pretzel-shaped fried dough, soaked in a sugar syrup.',
    price: 15,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
      
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

// import React from 'react';
// import Card from '../UI/Card';
// import MealItem from './MealItem/MealItem';
// import classes from './AvailableMeals.module.css';

// const DUMMY_MEALS = [
//   // (Your meal data as provided)
// ];

// const AvailableMeals = () => {
//   const mealsList = DUMMY_MEALS.map((meal) => (
//     <MealItem
//       key={meal.id}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ));

//   return (
//     <section className={classes.meals}>
//       <Card>
//         <div className={classes.mealsContainer}>
//           {mealsList}
//         </div>
//       </Card>
//     </section>
//   );
// };

// export default AvailableMeals;

