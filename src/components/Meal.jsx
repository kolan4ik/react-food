import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Meal = ({ strMeal, strMealThumb, idMeal }) => {
  const { name } = useParams();
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{strMeal}</span>
      </div>
      <div className='card-action'>
        <Link className='btn' to={`/categories/${name}/${idMeal}`}>
          Watch recipe
        </Link>
      </div>
    </div>
  );
};
