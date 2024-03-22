import { Link } from 'react-router-dom';
import Select from 'react-select';
import {
  cuisineOptions,
  dietOptions,
  mealOptions,
} from '../utils/filterOptions';
import { useState, useEffect } from 'react';
import Skeleton from '../components/Skeleton';
import { useDebounce } from '../hooks/useDebounceSearch';
import SearchList from '../components/SearchList';
const Search = () => {
  const [filter, setFilter] = useState({});
  const [mealFilter, setMealFilter] = useState({});
  const [dietFilter, setDietFilter] = useState({});
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
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
    }/recipes/complexSearch?query=${debouncedSearch}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
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
  }, [filter, mealFilter, dietFilter, debouncedSearch]);
  console.log(recipes);
  return (
    <div className="flex flex-col gap-8">
      <Link
        to="/"
        className="flex items-center gap-1 text-orange-600 font-semibold pb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        back
      </Link>
      <div>
        <input
          type="text"
          className="w-full p-4 focus:outline-none bg-transparent border-b border-b-orange-600 placeholder:text-orange-600 placeholder:text-2xl"
          placeholder="Search any recipe..."
          onChange={(e) => {
            setSearch(() => e.target.value);
          }}
        />
      </div>
      <div className="grid grid-flow-col gap-2">
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
          onChange={(diet) => {
            setDietFilter(() => diet);
          }}
          placeholder="Dietary Preferences"
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
          isClearable
          onChange={(meal) => {
            setMealFilter(() => meal);
          }}
          placeholder="Meal Types"
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
        <SearchList recipes={recipes} />
      )}
    </div>
  );
};

export default Search;
