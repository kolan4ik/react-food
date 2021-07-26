import { Meal } from './Meal';

export const MealList = ({ meals }) => {
  return (
    <div className='list'>
      {meals.map(el => (
        <Meal key={el.idMeal} {...el} />
      ))}
    </div>
  );
};
