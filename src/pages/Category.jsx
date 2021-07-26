import { useState, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';

export const Category = () => {
  const { name } = useParams();
  const [categoty, setCategory] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then(data => {
      setCategory(data.meals);
    });
  }, [name]);
  return (
    <>
      <button className='btn' onClick={goBack}>
        Go back
      </button>
      {!categoty.length ? <Preloader /> : <MealList meals={categoty} />}
    </>
  );
};
