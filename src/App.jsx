import Select from 'react-select';

import Hero from './components/Hero';
import RecipesList from './components/RecipesList';
import {
  cuisineOptions,
  dietOptions,
  mealOptions,
} from './utils/filterOptions';
import { useState, useEffect } from 'react';
import Skeleton from './components/Skeleton';

function App() {
  const [filter, setFilter] = useState({});
  const [mealFilter, setMealFilter] = useState({});
  const [dietFilter, setDietFilter] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async (url) => {
    try {
      setStatus((p) => {
        return {
          ...p,
          loading: true,
        };
      });
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed');
      }
      const recipes = await res.json();
      setRecipes(() => recipes);
      setStatus((p) => {
        return {
          ...p,
          success: true,
        };
      });
    } catch (error) {
      setStatus((p) => {
        return {
          ...p,
          error: true,
        };
      });
    } finally {
      setStatus((p) => {
        return {
          ...p,
          loading: false,
        };
      });
    }
  };
  useEffect(() => {
    let fetchURL = `${
      import.meta.env.VITE_BASE_URL
    }/recipes/random?number=12&apiKey=${import.meta.env.VITE_API_KEY}`;
    let params = '&inclue-tags=';
    let check = false;
    if (mealFilter?.value) {
      params += mealFilter.value + ',';
      check = true;
    }
    if (dietFilter?.value) {
      params += dietFilter.value + ',';
      check = true;
    }
    Object.values(filter).forEach((value) => {
      params += value.value + ',';
      check = true;
    });
    if (check) {
      fetchURL += params;
    }
    fetchRecipes(fetchURL);
  }, [filter, mealFilter, dietFilter]);

  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <div className="grid md:grid-flow-col grid-flow-row gap-2">
        <Select
          options={cuisineOptions}
          isMulti
          onChange={(value) => {
            setFilter((p) => {
              return {
                ...p,
                ...value,
              };
            });
          }}
          placeholder="Cuisine Types"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              text: 'orangered',
              primary: 'orangered',
            },
          })}
        />
        <Select
          options={dietOptions}
          isClearable
          placeholder="Dietary Preferences"
          onChange={(diet) => {
            setDietFilter(() => diet);
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              text: 'orangered',
              primary: 'orangered',
            },
          })}
        />
        <Select
          options={mealOptions}
          placeholder="Meal Types"
          isClearable
          onChange={(meal) => {
            setMealFilter(() => meal);
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              text: 'orangered',
              primary: 'orangered',
            },
          })}
        />
      </div>
      {status.error === true && (
        <div className="self-center">Something went wrong!</div>
      )}
      {status.loading === true && <Skeleton />}
      {status.success === true && status.loading !== true && (
        <RecipesList recipes={recipes} />
      )}
    </div>
  );
}

export default App;
