import { Link } from 'react-router-dom';

export const CategoryItem = ({ strCategory, strCategoryThumb, strCategoryDescription }) => {
  return (
    <>
      <div className='card'>
        <div className='card-image'>
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
        <div className='card-content'>
          <span className='card-title'>{strCategory}</span>
          <p>{strCategoryDescription.slice(0, 30)}...</p>
        </div>
        <div className='card-action'>
          <Link className='btn' to={`/categories/${strCategory}`}>
            Watch categories
          </Link>
        </div>
      </div>
    </>
  );
};
