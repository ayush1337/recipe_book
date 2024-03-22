import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import VegCheck from '../components/VegCheck';
import { Link, useParams } from 'react-router-dom';
import Skeleton from '../components/Skeleton';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const fetchRecipe = async (url) => {
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
      setRecipe(() => recipes);
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
    const url = `${
      import.meta.env.VITE_BASE_URL
    }/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`;
    fetchRecipe(url);
  }, []);
  const {
    title,
    readyInMinutes,
    servings,
    image,
    summary,
    instructions,
    vegetarian,
  } = recipe;
  return (
    <>
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
      {status.error === true && (
        <div className="self-center">Something went wrong!</div>
      )}
      {status.loading === true && <Skeleton />}
      {status.success === true && status.loading !== true && (
        <div className="w-full bg-white shadow p-4 rounded grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="px-2 py-1 rounded text-opacity-85  text-white bg-gradient-to-r from-amber-500 to-orange-500 font-medium text-sm">
                Dish Name
              </h1>
              <h2 className=" font-semibold text-2xl px-2">{title}</h2>
            </div>
            <div className="flex gap-2 text-xs px-2 flex-col items-start md:flex-row">
              <p>Preparation Time: {readyInMinutes} mins</p>
              <p>Servings: {servings}</p>
              <VegCheck vegetarian={vegetarian} />
            </div>
            <div className="md:hidden overflow-hidden rounded ">
              <img src={image} alt={title} className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="px-2 py-1 rounded text-opacity-85 text-sm text-white bg-gradient-to-r from-amber-500 to-orange-500 font-medium">
                Summary
              </h1>
              <p className="text-sm px-2">{parse(summary)}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="px-2 py-1 rounded text-opacity-85 text-sm text-white bg-gradient-to-r from-amber-500 to-orange-500 font-medium">
                Instructions
              </h1>
              <p className="instruction text-sm px-2">{parse(instructions)}</p>
            </div>
          </div>
          <div className="hidden md:block rounded overflow-hidden self-start">
            <img src={image} alt={title} className="w-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
