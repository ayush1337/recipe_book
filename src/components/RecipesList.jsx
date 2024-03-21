import React from 'react';
import data from '../../data';
import Card from './Card';
const RecipesList = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 ">
      {data.recipes.map((recipe) => {
        return <Card key={recipe.id} {...recipe} />;
      })}
    </div>
  );
};

export default RecipesList;
