import { useEffect, useState } from 'react';
import { getMealbyId } from '../api';
import { Preloader } from '../components/Preloader';
import { useParams, useHistory } from 'react-router-dom';

export const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { idMeal } = useParams();
  const { goBack } = useHistory();
  useEffect(() => {
    getMealbyId(idMeal).then(data => {
      setRecipe(data.meals[0]);
    });
  }, [idMeal]);
  return (
    <>
      {!recipe ? (
        <Preloader />
      ) : (
        <>
          <div className='card'>
            <div className='card-image'>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </div>
            <div className='card-content'>
              <h1>{recipe.strMeal}</h1>
              <h3>Category: {recipe.strCategory}</h3>
              {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
              <p>{recipe.strInstructions}</p>
              <br />
              <br />
              <table className='centered'>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(recipe).map(key => {
                    if (key.includes('Ingredient') && recipe[key]) {
                      return (
                        <tr key={key}>
                          <td>{recipe[key]}</td>
                          <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
              {recipe.strYoutube ? (
                <div className='row'>
                  <h5 style={{ margin: '2rem 0  1rem' }}>Video Recipe</h5>
                  <div className='video-wrap'>
                    <iframe title={idMeal} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <button className='btn' onClick={goBack}>
            Go back
          </button>
        </>
      )}
    </>
  );
};
